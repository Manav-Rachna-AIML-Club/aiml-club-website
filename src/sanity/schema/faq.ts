import { defineField, defineType } from "sanity";

export default defineType({
    name: "faq",
    title: "FAQ",
    type: "document",
    fields: [
        defineField({
            name: "q",
            title: "Question",
            type: "text",
            validation: (Rule) => Rule.required().error("question is required"),
        }),
        defineField({
            name: "a",
            title: "Answer",
            type: "text",
            validation: (Rule) => Rule.required().error("answer is required"),
        }),
    ]
})