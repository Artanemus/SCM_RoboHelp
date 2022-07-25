rh._.exports({"0":[["Events Grid"]],"1":[["\n\n  "],["\n\n  ","\n    ","\n      ","Create, enter distance and stroke, order, delete and print reports.","\n    ","\n  ","\n  ","\n    ","\n      ","\n    ","\n  ","\n\n  ","\n    ","\n      ","\n        LEDGER DESCRIPTIONS ....\n      ","\n      ","\n        ","\n        ","\n      ","\n      ","\n        ","\n          ","1. Event Number1","\n          ","Read only. Event number. Auto-assigned.","\n        ","\n        ","\n          ","2. Distance","\n          ","Distance in metres to swim. Enter by keyboard or select from the drop-down combobox.","\n        ","\n        ","\n          ","3. Stroke","\n          ","Swimming stroke. Enter by keyboard or select from the drop-down combobox.","\n        ","\n        ","\n          ","4. Event Status","\n          ","Read only. When checked, it indicates that all heats are finalized (closed).","\n        ","\n        ","\n          ","5. Nominees, Entrants.","\n          ","Both cell are read only. \n            ","Nominees"," - The number of members who nominated to for the event.","\n            ","Entrants"," - The number of nominees who were given a lane. ie. the number of entrants.","\n          ","\n        ","\n        ","\n          ","6. Event buttons.","\n          ","Expand grid, move up, move down, create, delete, print event report.  \n          ","\n        ","\n      ","\n    ","\n\n","\n\n  ","\n  \n\n\n\n  ","\n  "],["\n  ","\n    ","\n      ","\n        ","\n      ","\n      ","\n        ","\n          ","\n            ","\n              ","\n              Hover over the grid then\n              ","RMouse"," click to access the\n              context sensitive pop-up menu.\n            ","\n          ","\n        ","\n      ","\n    ","\n  ","\n  \n"],["\n\n\n  \n","To create a new event \n","Click ","the button to create a new event.","\n  \n","Or move to the last line and \n","arrow down","\n"," ","or move to the last field on the last line and press \n","tab",".\n"," Or ","\n","right-mouse click"," and select \n","New Event"," from the popup menu. \n"," As new events are inserted, they are auto-matically assigned an event number.","\n  \n"],["\n  \n","Click the button to delete the selected event.Or press \n","CTRL-DELETE",". A dialogue will dispay asking you to confirm deletion. There is no undo.","\n  \n","If an event you wish to delete contains raced heats (it's probably has race times - that's important data) then you will be prompted again. One last chance.","\n  \n","If an event contains closed heats then the delete button will be grayed. You can't delete an event with closed heats.","\n  \n","When you delete an event, all heat, entrant and nomination data is lost.","\n  \n","\n","TODO: the checkmark doesn't paint it's color correctly when heats are closed.","\n  \n"],["\n  \n","Events can be sorted by using \n","CTRL-UP-ARROW"," and \n","CTRL-DOWN-ARROW",". Or \n","right-mouse click"," to use the context sensitive popup menu and select either \n","Move-Up"," or \n","Move-Down",".","\n  \n","As events are moved up or down, they are auto-matically re-assigned a new event number. ","\n  \n"],["\n  \n","Press this button to toggle the expansion of the event's table. When expanded, additional event fields are available.","\n  \n","\n","Note: on future versions of SCM, the event type field will be available. In this field you can select between individual and team events.","\n  \n","\n","\n  \n"],["\n  \n","This column is only visible when the events table is expanded.","\n  \n","An event d\n","escription is ","optional. To enter a short description, select the CELL by \n","mouse click"," or \n","tab\n","\n        \n","\n","\n","\n"," ","\n      ","\n    \n","\n      \n","\n","\n","\n","or","\n    ","\n","\n      \n","\n        \n","\n","\n","\n"," ","\n      ","arrow keys\n    ",". \n","Click ","again to enter edit mode. Or use the keyboard short-cut \n","F2 ","or press \n","enter",".  .\n  ","\n  \n","When creating finals, semi-finals and quater-finals, SCM will write an auto-description. SCM adds this description so the 'final' is delineated from the seed event. Auto descriptions can be edited..","\n  \n","Descriptions placed in this column are displayed in reports, the nominate, marshall and timekeeper apps and other dialogues. ","\n  \n","Why the description field? ","\n  \n","\n    \n","\n      \n","\n      \n","\n    ","\n    \n","\n      \n","\n        \n","\n","\n        \n","It's easy to seperate genders using the auto-build heats options.","\n      ","\n      \n","\n        \n","\n","\n        \n","\n          \n","But if you would like to see seperate boys and girls events clearly \n","outlined in the meet's program",".","\n          \n","\n","Toggle"," expanded mode and enter a description.","\n          \n"," ","\n        ","\n      ","\n      \n","\n        \n","\n","\n        \n","Be aware, in the un-expanded view, these events will appear identical.\n","\n          \n","\n          \n","But in reports and other views these identical distance/stroke events will be clearly delineated.","\n      ","\n    ","\n  ","\n  \n","\n","The Marshal, Timekeeper and Nominate support apps also display these event descriptions.","\n  \n","Below is a snippet of an event report, showing event descriptions.","\n  \n","\n","\n","\n  \n"," ","\n  \n"," ","\n  \n"," ","\n  \n"," ","\n  \n"," ","\n  \n"," ","\n  \n"],["\n  \n","\n","SCM's default distances are 25m, 50m, 100m, 200m, 400m, 1000m. Distances are not arbetory, they can be changed or added too in the SCM MSSQL database using SSMS.","\n  \n"],["\n  \n","Navigate by mouse or use \n","\n","tab\n","\n"," or ","\n","\n","arrow keys"," and select the CELL. \n","Click ","again to enter edit mode. Or use the keyboard short-cut \n","F2 ","or press \n","enter",".  ","\n  \n","When in edit mode, enter the distance. Or use the drop-down combo box to select the distance.","\n  \n","\n","Note: Should you wish to type the distance, SCM's Auto-type will assist your entry.","\n  \n"],["\n  \n","\n","SCM's default strokes are Freestyle, Breaststroke, Backstroke and Butterfly. Swimming strokes are not arbetory, they can be changed or added too in the SCM MSSQL database using SSMS.","\n  \n"],["\n  \n","\n","\n","Click ","or navigate by the \n","tab\n"," ","\n    \n","\n      \n","\n","\n","\n","or"," \n    ","\n","arrow keys"," and select the CELL. \n","Click ","again to enter edit mode. Or use the keyboard short-cut \n","F2 ","or press \n","enter",". \n","\n  ","\n  \n","When in edit mode, enter the stroke. Or use the drop-down combo box to select the distance.","\n  \n","\n","Note: Should you wish to type the stroke, SCM's Auto-type will assist your entry.","\n  \n"],["\n  \n","\n","\n","Click ","the report button to see an event report.","\n  \n","\n","Cntrl-click"," for an alternative event report.","\n  \n","You can also \n","right-mouse click"," for the popup menu and select 'Event Rpt*'. Holding CNTRL while using the popup menu will select the alternative report.","\n  \n","For some examples of event reports ... \n"," \n","\n  \n"],["\n  \n","\n","\n","Right-mouse click"," when positioned over the event table to see the context sensitive pop-up menu.","\n  \n","Move Up - move the event up\n","\n    Move Down - move the event down\n","\n    Renumber Events - depreciated. \n","\n    New Event - create a new event. The new event is appended to the end of the table\n","\n    Event Report* - View an event report. Hold down Cntrl to view an alternative event report.","\n\n"]],"2":[["The Event Grid."]],"3":[["event, grid, create, delete, move, stroke, distance"]],"4":[["events,sort,table,create,new,delete,distance,stroke,"]],"5":[["Event grid ... pop-up menu."],["\n","Create new event"],["\n","Event Description Field"],["\n","Distance"],["\n","Stroke"],["\n","Event Reports"],["\n","Event's Popup Menu"]],"6":[["\n","\n","Delete an event"],["\n","\n","\n","Move events"],["\n","\n","Expand the events table."],["Edit distance. "],["Edit stroke."]],"id":"24"})