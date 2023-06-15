import React, { useState } from 'react';
import "./App1.css"
import { alignPropType } from 'react-bootstrap/esm/types';
function EmailPage() {
  const [activeSection, setActiveSection] = useState('inbox');
  const [searchQuery, setSearchQuery] = useState('');

  const handleSectionClick = (section) => {
    setActiveSection(section);
  };
  const handleSearchChange = (event) => {
    setSearchQuery(event.target.value);
  };

  return (
    <div>
        <img src={"https://ontwerpenmeer.nl/wp-content/uploads/2021/01/inboxify-logo.png"} className='logo'  alt="logo"/>
                    
      <div id="sections">
        <button
          onClick={() => handleSectionClick('inbox')}
          className={activeSection === 'inbox' ? 'active' : ''}
        >
          Inbox
        </button>
        <button
          onClick={() => handleSectionClick('starred')}
          className={activeSection === 'starred' ? 'active' : ''}
        >
          Starred
        </button>
        <button
          onClick={() => handleSectionClick('snoozed')}
          className={activeSection === 'snoozed' ? 'active' : ''}
        >
          Snoozed
        </button>
        <button
          onClick={() => handleSectionClick('trash')}
          className={activeSection === 'trash' ? 'active' : ''}
        >
          Trash
        </button>
        <button
          onClick={() => handleSectionClick('drafts')}
          className={activeSection === 'drafts' ? 'active' : ''}
        >
          Drafts
        </button>
        <button
          onClick={() => handleSectionClick('sent')}
          className={activeSection === 'sent' ? 'active' : ''}
        >
          sent
        </button>
        <button
          onClick={() => handleSectionClick('spam')}
          className={activeSection === 'spam' ? 'active' : ''}
        >
          Spam
        </button>
        <button
          onClick={() => handleSectionClick('scheduled')}
          className={activeSection === 'scheduled' ? 'active' : ''}
        >
          Scheduled
        </button>

      </div>
      <div className="search-bar">
        <input
          type="text"
          placeholder="Search emails..."
          value={searchQuery}
          onChange={handleSearchChange}
        />
      </div>
      <div className="email-section">
        {activeSection === 'inbox' && <p>Nothing in Inbox</p>}
        {activeSection === 'starred' && <p>Nothing in Starred</p>}
        {activeSection === 'snoozed' && <p>Nothing in Snoozed</p>}
        {activeSection === 'trash' && <p>Nothing in Trash</p>}
        {activeSection === 'drafts' && <p>Nothing in Drafts</p>}
        {activeSection === 'sent' && <p>Nothing in Sent</p>}
        {activeSection === 'spam' && <p>Nothing in Spam</p>}
        {activeSection === 'scheduled' && <p>Nothing in Scheduled</p>}
      </div>
    </div>
  );
}

export default EmailPage;
