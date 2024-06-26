window.BENCHMARK_DATA = {
  "lastUpdate": 1719406926896,
  "repoUrl": "https://github.com/asterinas/asterinas",
  "entries": {
    "sysbench-thread Benchmark": [
      {
        "commit": {
          "author": {
            "name": "Zhang Junyang",
            "username": "junyang-zh",
            "email": "junyang@stu.pku.edu.cn"
          },
          "committer": {
            "name": "Tate, Hongliang Tian",
            "username": "tatetian",
            "email": "tatetian@gmail.com"
          },
          "id": "6b17cceaccc675728621d25dd73cb849c566c94e",
          "message": "Replace the futex hash buckects with `Once` to fix the leak",
          "timestamp": "2024-06-22T13:35:23Z",
          "url": "https://github.com/asterinas/asterinas/commit/6b17cceaccc675728621d25dd73cb849c566c94e"
        },
        "date": 1719406924067,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "Average Execution Time per Thread on Linux",
            "value": "21.33",
            "unit": "ms",
            "extra": "linux_avg"
          },
          {
            "name": "Average Execution Time per Thread on Asterinas",
            "value": "447.97",
            "unit": "ms",
            "extra": "aster_avg"
          }
        ]
      }
    ]
  }
}