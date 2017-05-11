<script language="JavaScript">
			function tick() {
				var hours, minutes, seconds;
				var intHours, intMinutes, intSeconds;
				var today;
				today = new Date();
				intHours = today.getHours();
				intMinutes = today.getMinutes();
				intSeconds = today.getSeconds();
				if(intHours == 0) {
					hours = "00:";
				} else if(intHours < 10) {
					hours = "0" + intHours + ":";
				} else {
					hours = intHours + ":";
				}
				if(intMinutes < 10) {
					minutes = "0" + intMinutes + ":";
				} else {
					minutes = intMinutes + ":";
				}
				if(intSeconds < 10) {
					seconds = "0" + intSeconds + " ";
				} else {
					seconds = intSeconds + " ";
				}
				timeString = hours + minutes + seconds;
				Clock.innerHTML = timeString;
				window.setTimeout("tick();", 1000);
			}
			window.onload = tick;
		</script>