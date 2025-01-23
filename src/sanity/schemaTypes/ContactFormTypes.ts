export const contactFormTypes = {
  name: 'contactFormSubmission',
  title: 'Contact Form Submissions',
  type: 'document',
  fields: [
    {
      name: 'name',
      title: 'Name',
      type: 'string',
    },
    {
      name: 'email',
      title: 'Email',
      type: 'string',
    },
    {
      name: 'message',
      title: 'Message',
      type: 'text',
    },
    {
      name: 'submittedAt',
      title: 'Submitted At',
      type: 'datetime',
    },
  ],
};
