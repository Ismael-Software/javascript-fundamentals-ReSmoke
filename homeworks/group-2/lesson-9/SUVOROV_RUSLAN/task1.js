const checkIP = ip => new RegExp(/^(2[0-5][0-5]|1\d\d|[0-9](?=\d)\d|[0-9])((\.(2[0-5][0-5]|1\d\d|[1-9](?=\d)\d|\d)){2}|(\.(2[0-5][0-5]|1\d\d|[1-9](?=\d)\d|\d)){4})\.(2[0-5][0-5]|1\d\d|[1-9](?=\d)\d|[0-9])$/, 'g').test(ip);

console.log(checkIP('198.168.0.1'));