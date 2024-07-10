import React from 'react';
import { useParams } from 'react-router-dom';

function MailboxDetails() {
  const { mailBoxId } = useParams();
	return <div>MailboxDetails</div>;
}

export default MailboxDetails;
