[0;1;31m●[0m mongod.service - MongoDB Database Server
     Loaded: loaded (/lib/systemd/system/mongod.service; enabled; vendor preset: enabled)
     Active: [0;1;31mfailed[0m (Result: exit-code) since Wed 2026-06-24 13:06:11 IST; 6s ago
       Docs: https://docs.mongodb.org/manual
    Process: 17735 ExecStart=/usr/bin/mongod --config /etc/mongod.conf [0;1;31m(code=exited, status=14)[0m
   Main PID: 17735 (code=exited, status=14)

Jun 24 13:06:11 imran-smartaxiom systemd[1]: Started MongoDB Database Server.
Jun 24 13:06:11 imran-smartaxiom mongod[17735]: {"t":{"$date":"2026-06-24T07:36:11.101Z"},"s":"I",  "c":"CONTROL",  "id":7484500, "ctx":"main","msg":"Environment variable MONGODB_CONFIG_OVERRIDE_NOFORK == 1, overriding \"processManagement.fork\" to false"}
Jun 24 13:06:11 imran-smartaxiom systemd[1]: [0;1;39m[0;1;31m[0;1;39mmongod.service: Main process exited, code=exited, status=14/n/a[0m
Jun 24 13:06:11 imran-smartaxiom systemd[1]: [0;1;38;5;185m[0;1;39m[0;1;38;5;185mmongod.service: Failed with result 'exit-code'.[0m
