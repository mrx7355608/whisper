import { list } from "@keystone-6/core";
import {
  text,
  relationship,
  timestamp,
  multiselect,
} from "@keystone-6/core/fields";
import { allowAll } from "@keystone-6/core/access";

export const messageList = list({
  access: allowAll,
  fields: {
    text: text({ validation: { isRequired: true } }),
    author: relationship({ ref: "User", many: false }),
    createdOn: timestamp(),
    status: multiselect({
      type: "enum",
      options: [
        { label: "Sent", value: "sent" },
        { label: "Delivered", value: "delivered" },
        { label: "Seen", value: "seen" },
      ],
    }),
  },
});
