rh._.exports({"0":[["How seeding works"]],"1":[["\n    ","\n      ","\n      ","\n        ","\n          ","\n        ","\n        ","\n          ","\n            ","\n              ","\n              ","\n              ","\n                  SwimClubMeet","\n              ","\n            ","\n          ","\n        ","\n      ","\n    ","\n    ","\n    "],["\n    ","Here's an illustrated explanation of seeding lanes.","\n    ","Some ground rules.","\n    ","\n      Olympic standards determine which lanes competitors are scattered into.\n      The order for an eight lane pool goes something like this ....\n      4,5,3,6,2,7,1,8. The algorithm used in SCM will correctly scatter for any\n      sized pool. Even pools with an odd number of lanes.\n    ","\n    ","Consider this ...","\n    ","\n    ","\n      Each square represents a swimmer. Fastest swimmer is green, intermediate\n      yellow, slowest red. A total of 32 swimmers will require four heats in an\n      eight lane pool.\n    ","\n    "],["\n    ","\n    ","\n      The illustrate shows that the all top eight fastest swimmers have been\n      placed in heat four. All the slowest swimmers are in the heat one.\n    ","\n    "],["\n\n    ","Circle seeding is selected.","\n    ","\n      In this example the seed depth will be set to two. This means the two\n      fastest heats, three and four, will be circle seed.\n    ","\n    ","The heats one and two will use the default seed method.","\n    ","\n      Note: SwimClubMeet first builds a stack of swimmers, fastest to slowest.\n      Calculates the number of heats and count of swimmers needed. Then it\n      builds heats, fastest to slowest. Hence circle seeding is top down.\n    ","\n    ","\n    ","\n      It very suttle but you can see that there is now a 'spread' of fastest swimmers in heats\n      3 and 4. Your fastest swimmer is in heat 4, lane 4. the second fastest\n      swimmer in heat 3, lane 4. Think of it as heat 3 and 4 being equal.\n    ","\n    ","For competative swimming, circle seeding uses a depth equal to the number of heats. ","\n\n    "],["\n    ","\n      When you have many entrants to an event (say four or five heats) you may\n      want to circle seed to improve the racing experience for your top\n      contenders.\n    ","\n    ","\n      It's recommended that you don't exceed a depth of three. The racing\n      experience (at club level) for bottom ranked swimmers isn't improved if you\n      go beyond three.\n    ","\n    "],["\n    ","\n      When creating a 'FINAL' the default seeding is used. This a system\n      default, SCM managed. Your seed settings in options are ignored.\n    ","\n    ","\n      When creating a 'SEMI' or 'QUARTER-FINAL' circle seeding is used. (...\n      again SCM managed). It's depth level is set to the number of heats.\n    ","\n  \n\n","\n    ","\n      ","\n    ","\n  \n\n"]],"2":[["SCM How seeding works"]],"6":[["Default seeding. (This algorithm is also used by 'Finals' seeding)."],["\n      Circle seeding. (Also used by 'Quarter' and 'Semi'- Finals').\n    "],["Why circle seed at club night?"],["Other notes"]],"id":"66"})