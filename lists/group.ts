import { list } from "@keystone-6/core";
import { relationship, text } from "@keystone-6/core/fields";
import { allowAll } from "@keystone-6/core/access";

export const groupList = list({
  access: allowAll,
  fields: {
    name: text({ validation: { isRequired: true } }),
    members: relationship({ ref: "User", many: true }),
    admin: relationship({ ref: "User", many: false }),
    messages: relationship({ ref: "Message", many: true }),
  },
});
