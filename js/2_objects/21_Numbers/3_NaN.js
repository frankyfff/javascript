<html>
  <head>
    <script type="text/javascript">
      function showValue(){
        var dayOfMouth = 100;

        if (dayOfMouth < 1 || dayOfMouth > 31) {
          dayOfMouth = Number.NaN
          alert("Day of Mouth must be between 1 and 31.")
        }

        document.write("Value of dayOfMouth : " + dayOfMouth);
      }

    </script>
  </head>
