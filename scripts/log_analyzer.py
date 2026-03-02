def analyze_log(file_name):
    error_count = 0

    with open(file_name, 'r') as file:
        for line in file:
            if "ERROR" in line:
                error_count += 1

    print(f"Total ERROR lines: {error_count}")

log_file = "scripts/sample.log"
analyze_log(log_file)