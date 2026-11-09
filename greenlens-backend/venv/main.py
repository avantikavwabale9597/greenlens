import time
import psutil
import math
from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from pydantic import BaseModel

app = FastAPI(title="GreenLens API")

app.add_middleware(
    CORSMiddleware,
    allow_origins=["http://localhost:5173"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

class BenchmarkResult(BaseModel):
    energy_kwh: float
    co2e_g: int
    hotspots_count: int
    cpu_before: float
    cpu_after: float
    memory_before: float
    memory_after: float
    runtime_before: float
    runtime_after: float

# --- REAL WORKLOAD FUNCTIONS ---
def run_unoptimized_task():
    """Simulates bad code: A nested loop doing redundant math"""
    start_time = time.time()
    result = 0
    for i in range(2000):
        for j in range(2000):
            result += math.sqrt(i * j)
    end_time = time.time()
    return end_time - start_time

def run_optimized_task():
    """Simulates optimized code: Using built-in optimized functions"""
    start_time = time.time()
    # Much faster, localized execution
    result = sum(math.sqrt(x) for x in range(4000000))
    end_time = time.time()
    return end_time - start_time

@app.get("/")
def read_root():
    return {"message": "GreenLens API is running"}

@app.get("/api/benchmark", response_model=BenchmarkResult)
def get_benchmark_data():
    process = psutil.Process()
    
    # 1. Measure Unoptimized (Before)
    cpu_baseline = psutil.cpu_percent(interval=None) # Reset counter
    time_unoptimized = run_unoptimized_task()
    cpu_unoptimized = psutil.cpu_percent(interval=0.1)
    mem_unoptimized = process.memory_info().rss / (1024 * 1024) # Convert bytes to MB
    
    # 2. Measure Optimized (After)
    time_optimized = run_optimized_task()
    cpu_optimized = psutil.cpu_percent(interval=0.1)
    mem_optimized = process.memory_info().rss / (1024 * 1024)

    # 3. Calculate real energy estimates based on actual runtime
    # Formula: (Time in hours) * (CPU Usage %) * (Assumed Laptop Wattage)
    energy = (time_unoptimized / 3600) * (cpu_unoptimized / 100) * 65.0 
    co2e = int(energy * 400) # Roughly 400g CO2 per kWh

    # Scale runtime for the UI chart (multiplying by 50 just so it fits the 1-100% chart height visually)
    return {
        "energy_kwh": round(energy, 6),
        "co2e_g": co2e if co2e > 0 else 1, 
        "hotspots_count": 4,
        "cpu_before": min(round(cpu_unoptimized, 1), 100.0),
        "cpu_after": min(round(cpu_optimized, 1), 100.0),
        "memory_before": min(round(mem_unoptimized / 2, 1), 100.0), # Scaled for chart
        "memory_after": min(round(mem_optimized / 2, 1), 100.0),
        "runtime_before": min(round(time_unoptimized * 50, 1), 100.0), 
        "runtime_after": min(round(time_optimized * 50, 1), 100.0)
    }

@app.get("/api/hotspots")
def get_hotspots():
    return [
        {"id": 1, "name": "Nested DB query loop", "file": "api/users/analytics.py:42", "color": "red-500"},
        {"id": 2, "name": "Redundant re-computation", "file": "services/report_gen.py:118", "color": "orange-400"},
        {"id": 3, "name": "Unbounded cache growth", "file": "utils/cache_manager.py:25", "color": "orange-400"},
        {"id": 4, "name": "Inefficient JSON serialization", "file": "models/base.py:89", "color": "yellow-400"}
    ]