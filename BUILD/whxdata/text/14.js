rh._.exports({"0":[["BMAC_Details"]],"1":[["\n    ","\n      ","\n      ","\n        ","\n          ","\n        ","\n        ","\n          ","\n            ","\n              ","\n              ","\n              ","\n                  SwimClubMeet","\n              ","\n            ","\n          ","\n        ","\n      ","\n    ","\n    ","\n  ","This special tool creates the SwimClubMeet database on SQLEXPRESS.","\n  ","It ensures that you have SQLEXPRESS by asking you to login into the SQL server.","\n  ","If successfull it'll display the button 'Build Me A Club'.","\n  ","When you press this button it will first make some checks.","\n  ","If you already have a SwimClubMeet database on you SQL server, it'll abort.","\n  ","The application has a large number of SQL scripts that it will run on the SQL server.","\n  ","SCM_BuildMeAClub uses the sqlcmd.exe commandline utility when processing these scripts. SQLcmd.exe is installed by default when use first install SQLEXPRESS.","\n  ","The application will check that you have SQLcmd.exe installed. If it can't find the utiltiy it will abort.","\n  ","As it runs it will display it's progress and display information in the application's text window.","\n  ","As it runs, it will create the SwimClubMeet database, create all of the tables, procedures and scalar functions. ","\n  ","Then it will populate some of the tables with 'starter' data.","\n  ","It will create a user, scmAdmin. A set of roles : SCM_Administrator, SCM_Marshal and SCM_User.","\n  ","It will assign permissions for each role on each table.","\n  ","As the SQL server performs it's given tasks it will log it's progress to a file created in the user's document folder. That file is named SCM_BuildMeAClub.log..","\n  ","If the SQL server encounters any errors, it will log the errors to this file.","\n  ","If the command line utility SQLcmd.exe encounters an error, it will log the error to the SCM_BuildMeAClub text windows.","\n  ","Typically the whole build process is over within a minute or two.","\n  "," ","\n  ","NOTE: the term 'SQLEXPRESS' and 'SQL server' are identical in meaning.","\n  "," ","\n\n","\n    ","\n      ","\n    ","\n  \n\n"]],"id":"14"})