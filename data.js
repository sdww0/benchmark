window.BENCHMARK_DATA = {
  "lastUpdate": 1719407813945,
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
      },
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
        "date": 1719407812057,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "Average Execution Time per Thread on Linux",
            "value": "21.32",
            "unit": "ms",
            "extra": "linux_avg"
          },
          {
            "name": "Average Execution Time per Thread on Asterinas",
            "value": "360.34",
            "unit": "ms",
            "extra": "aster_avg"
          }
        ]
      }
    ],
    "getpid Benchmark": [
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
        "date": 1719407041440,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "Average Syscall Latency on Linux",
            "value": "272",
            "unit": "ns",
            "extra": "linux_avg"
          },
          {
            "name": "Average Syscall Latency on Asterinas",
            "value": "249",
            "unit": "ns",
            "extra": "aster_avg"
          }
        ]
      }
    ],
    "sysbench-cpu Benchmark": [
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
        "date": 1719407276307,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "Average Execution Time per CPU on Linux",
            "value": "3.83",
            "unit": "ms",
            "extra": "linux_avg"
          },
          {
            "name": "Average Execution Time per CPU on Asterinas",
            "value": "3.82",
            "unit": "ms",
            "extra": "aster_avg"
          }
        ]
      }
    ]
  }
}