import {defineField, defineType} from 'sanity'

export const demoBooking = defineType({
  name: 'demoBooking',
  title: 'Demo Bookings',
  type: 'document',
  fields: [
    defineField({
      name: 'name',
      title: 'Full Name',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'phone',
      title: 'Phone Number',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'gymName',
      title: 'Gym / Fitness Center Name',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'city',
      title: 'City',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'message',
      title: 'Message / Requirements',
      type: 'text',
      rows: 4,
    }),
    defineField({
      name: 'status',
      title: 'Lead Status',
      type: 'string',
      initialValue: 'new',
      options: {
        list: [
          {title: 'New', value: 'new'},
          {title: 'Contacted', value: 'contacted'},
          {title: 'Demo Scheduled', value: 'demo_scheduled'},
          {title: 'Converted (Customer)', value: 'converted'},
          {title: 'Closed / Not Interested', value: 'closed'},
        ],
        layout: 'radio',
      },
    }),
    defineField({
      name: 'submittedAt',
      title: 'Submission Date & Time',
      type: 'datetime',
      initialValue: () => new Date().toISOString(),
    }),
    defineField({
      name: 'notes',
      title: 'Internal Admin Notes',
      type: 'text',
      rows: 3,
    }),
  ],
  preview: {
    select: {
      title: 'name',
      subtitle: 'gymName',
      description: 'phone',
    },
  },
})

