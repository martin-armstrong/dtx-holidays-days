# dtx-holidays-days
This is a TamperMonkey script (a browser extension) which adds a new row in the DTX My Holidays tab showing holiday entitlement in days rather than hours.

# Set up
Install the TamperMonkey extension on Chrome or Firefox..\
[Chrome Install](https://chrome.google.com/webstore/detail/tampermonkey/dhdgffkkebhmkfjojejmpbldmpobfkfo?hl=en)\
[Firefox Install](https://addons.mozilla.org/en-GB/firefox/addon/tampermonkey/)

With the extension installed, right click [this link](https://github.com/martin-armstrong/dtx-holidays-days/raw/master/DTX_HOLIDAY_DAYS.user.js) and choose open in new tab.\
You should be shown a TamperMonkey page asking if you want to use the script, click the install button.

Once installed, click the TamperMonkey symbol in the top right of your browser then click "Dashboard".\
This will open a new tab showing a list of installed scripts, check the DTX_SUBMIT_HOLIDAYS script is installed and enabled.

Now when you load DTX and view the My Holidays tab you should see some new numbers showing holiday entitlement, taken, future and remaining values in days.

(The default day is taken as 7.5 hours, but you can edit the script and change value *hoursInWorkingDay* if you need to)
