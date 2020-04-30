window.addEventListener('DOMContentLoaded', () => {

  // New contact added to list
  document.querySelector('#new-contact-form').addEventListener('submit', e => {
    e.preventDefault();

    // Get contact information
    let contactName = document.querySelector('#newContact__input').value;
    let contactFrequency = document.querySelector('#newFrequency__input').value;

  
    let newContact = {
      name: contactName,
      frequency: contactFrequency
    };

    $.ajax({
      type: 'POST',
      url: '/',
      data: newContact,
      success: function(data) {
        console.log('It worked');
        location.reload();
      }
    });

    // Reset form on submit
    document.querySelector('#new-contact-form').reset();
    document.querySelector('#newContact__input').focus();
  });


  // Removing contact from UI
  document.querySelectorAll('.cross').forEach(el => {
    el.addEventListener('click', e => {

      const contactList = document.querySelector('.contact-list');

      // delete element from UI
      let li = e.target.parentNode;
      contactList.removeChild(li);

      // delete element from data - still working out
      $.ajax({
        type: 'DELETE',
        url: '/' + item,
        success: function(data) {
          console.log('Item has been deleted from data');
          location.reload();
        }
      });
    });

  });

})




