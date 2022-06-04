rh._.exports({"0":[["SCM_Login"]],"3":[["\n  ","\n    ","\n        ","SwimClubMeet","\n  ","\n  ","\n  "],["\n  "],["\n  ","\n  ","On first running any of the SCM applications you are shown the login dialogue. This login screen enables connection to the Microsoft's SQLSERVER.","\n  ","Here you enter the server name. This can be a named path, which may include an instance name. (As shown above.).","\n  ","Or the server name can be a IP address and optionally a port. (eg. 127.0.0.1:1433).  Typically an IP address is used if you are remotely accessing the server. For example, when using the Nominate, Marshall and Timekeeper applications. Remote access will require a user name and password.","\n  ","If 'Use OS Authentication' is checked then the users Windows login will be used. You must be part of the administrator group and the dbo owner of the MSSERVER. Typically this is the case when you do the first time install of MSSERVER.","\n  ","A valid connection is required else nothing runs.","\n  "],["\n  ","SCM SQL database has pre-assigned user schemas. They are scmAdmin, scmMarshall, scmTimekeeper and scmMember. Each user profile has limited data access to tables and records.","\n  ","scmAdmin can read and write to all tables in the SCM database. (A SCM superuser)","\n  ","scmMarshall can read all but can only write, event status and entrant disqualified and scratched fields.","\n  ","scmTimekeeper can read all but can only write to the entrant's RaceTime field.","\n  ","scmMember has restricted read and can only write to nominate.","\n  ","On install, only scmAdmin has a named user profile. It hasn't been assigned a password. Use MSSMS to enable the account and set the password.  ","\n  ","Note: For security reasons, don't be tempted to use the SQLSERVER su account as short-cut to remote login. The SCM pre-defined user schemas give you much greater security.","\n  "," ","\n\n","\n  ","\n    "," ","\n  ","\n\n"]],"4":[["Login."]],"5":[["Login to SwimClubMeet."],["Pre-assigned remote user names."]],"id":"8"})