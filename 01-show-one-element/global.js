document.addEventListener('DOMContentLoaded', function(){
  const LINK = document.getElementById('more_text_link');
  const TEXT = document.getElementById('more_text_content');

  LINK.addEventListener('click', function(){
    TEXT.style.display = 'initial';
    LINK.style.display = 'none';
  });
});

  // Here is some pseudo-code to help you get started:

  // 1. Get the DOM element which will be clicked.

  // 2. Add a listener for the 'click' event onto that element.

  // 3. The block for the listener should get the DOM
  //    element containing the text to reveal.

  // 4. Modify that DOM element's style to change it's 'display'
  //    from a hidden value to a shown value.

  // 5. Also modify the DOM to hide the "More info..." link.
  