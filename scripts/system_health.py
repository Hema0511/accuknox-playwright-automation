import psutil

def system_health():
    print("System Health Report")
    print("---------------------")

    cpu = psutil.cpu_percent(interval=1)
    memory = psutil.virtual_memory().percent
    disk = psutil.disk_usage('/').percent

    print(f"CPU Usage: {cpu}%")
    print(f"Memory Usage: {memory}%")
    print(f"Disk Usage: {disk}%")

    if cpu > 80:
        print("Warning: High CPU usage")
    if memory > 80:
        print("Warning: High Memory usage")
    if disk > 80:
        print("Warning: Low Disk space")

system_health()