
document.querySelectorAll('.btn').forEach(button => {
    button.addEventListener('click', () => {
      const li = button.closest('li');
      const isActive = li.id === 'active-li';
  
      // Reset all list items
      document.querySelectorAll('li').forEach(item => {
        item.id = ''; // Remove active id
        const btn = item.querySelector('.btn');
        if (btn) {
          btn.src = './images/section-7-(+++)icon.svg'; // Set to plus icon
          btn.id = 'plus';
        }
  
        // Remove dynamically added content if exists
        const existingLine = item.querySelector('.line-3');
        const existingFooter = item.querySelector('.li-footer');
        if (existingLine) existingLine.remove();
        if (existingFooter) existingFooter.remove();
      });
  
      // Toggle the clicked list item
      if (!isActive) {
        li.id = 'active-li'; // Set active id
        button.src = './images/section-7-(---)icon.svg'; // Set to minus icon
        button.id = 'minus';
  
        // Dynamically create <div class="line-3"></div>
        const line = document.createElement('div');
        line.classList.add('line-3');
  
        // Dynamically create <div class="li-footer"><p>...</p></div>
        const footer = document.createElement('div');
        footer.classList.add('li-footer');
        const paragraph = document.createElement('p');
        paragraph.textContent = `During the initial consultation, we will discuss your business goals and objectives, 
        target audience, and current marketing efforts. This will allow us to understand your needs and tailor our services to best fit your requirements.`;
        footer.appendChild(paragraph);
  
        // Append created elements to the active li
        li.appendChild(line);
        li.appendChild(footer);
      }
    });
  });
  