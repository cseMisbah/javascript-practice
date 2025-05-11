{
  /**<form onsubmit="{return" validateForm()} name="myForm">
      <label for="">
        Name : <input type="text" id="fname" name="fname" />
      </label>
      <input type="submit" value="submit" />
    </form>
 */
}

const validateForm = () => {
  let x = document.forms["myForm"]["fname"].value;
  if (x == "") {
    alert("Name must be filled out");
  }
  return false;
};
