import {defineField, defineType} from 'sanity'

export const leadCapture = defineType({
  name: 'leadCapture',
  title: 'Quick Leads (Hero Phone Capture)',
  type: 'document',
  fields: [
    defineField({
      name: 'phone',
      title: 'Phone Number (+91)',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'source',
      title: 'Source / Location on Site',
      type: 'string',
      initialValue: 'Homepage Hero',
    }),
    defineField({
      name: 'status',
      title: 'Call Status',
      type: 'string',
      initialValue: 'pending_call',
      options: {
        list: [
          {title: 'Pending Call (Call ASAP)', value: 'pending_call'},
          {title: 'Called - Interested', value: 'called_interested'},
          {title: 'Called - No Answer', value: 'called_no_answer'},
          {title: 'Converted to Demo', value: 'converted'},
          {title: 'Invalid / Spam', value: 'spam'},
        ],
        layout: 'radio',
      },
    }),
    defineField({
      name: 'submittedAt',
      title: 'Submitted At',
      type: 'datetime',
      initialValue: () => new Date().toISOString(),
    }),
    defineField({
      name: 'notes',
      title: 'Calling Notes',
      type: 'text',
      rows: 3,
    }),
  ],
  preview: {
    select: {
      title: 'phone',
      subtitle: 'status',
      description: 'submittedAt',
    },
  },
})

