export default class UtilFunctions{

    static convert(str) {
        var date = new Date(str),
        mnth = ("0" + (date.getMonth()+1)).slice(-2),
        day  = ("0" + date.getDate()).slice(-2);
        return [ day, mnth,date.getFullYear() ].join("/");
    }

    static previousDate(currentdate,pas) {
      var date = new Date(currentdate);
      var newdate = new Date(date);

      newdate.setDate(newdate.getDate() + pas);

      var dd = ("0" + newdate.getDate()).slice(-2);
      var mm = ("0" + (newdate.getMonth() + 1)).slice(-2);
      var y = newdate.getFullYear();

      return (dd + '/' +mm+ '/' + y)
    }

    static previousDateV2(pas) {
      var date = new Date();
      var newdate = new Date(date);

      newdate.setDate(newdate.getDate() -pas);
      return newdate
    }
}
