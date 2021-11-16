<html>
  <head>
    <script type="text/javascript">

      function book(title, author){
        this.title = title;
        this.author = author;
      }

    </script>
  </head>
    <script type="text/javascript">
      var myBook = new book("Perl", "Mohtashim");
      book.prototype.price = null;
      myBook.price = 100;
      document.write("Book title is : "  + myBook.title + "</br>");
      document.write("Book auther is : "  + myBook.author + "</br>");
      document.write("Book price is : "  + myBook.price + "</br>");
    </script>
  </body>
</html>
