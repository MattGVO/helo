insert into userTable
(useremail,userhash)
values
($1, $2)
returning *;