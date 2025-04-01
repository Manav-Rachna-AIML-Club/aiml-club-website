import { defineField, defineType } from "sanity";

export default defineType({
    name: "howWeHelp",
    title: "How We Help",
    type: "document",
    fields: [
        defineField({
            name: "icon",
            title: "Icon",
            type: "text",
            validation: (Rule) => Rule.required().error("Icon is required"),
        }),
        defineField({
            name: "title",
            title: "Title",
            type: "text",
            validation: (Rule) => Rule.required().error("Title is required"),
        }),
        defineField({
            name: "description",
            title: "Description",
            type: "text",
            validation: (Rule) => Rule.required().error("Description is required"),
        }),
    ]
})