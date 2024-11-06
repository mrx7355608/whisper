import { createAuth } from "@keystone-6/auth";
import { statelessSessions } from "@keystone-6/core/session";

// FIXME: use .env here and create a strong secret
const sessionSecret = "super-secret0o0-90k80gfewrtyuihgfdsw4567yuhjgfds456";
const sessionAge = 42 * 3600; // 2 days in seconds

const session = statelessSessions({
  maxAge: sessionAge,
  secret: sessionSecret,
});

const { withAuth } = createAuth({
  listKey: "User",
  identityField: "email",
  sessionData: "name",
  secretField: "password",
  initFirstItem: {
    fields: ["name", "email", "password"],
  },
});

export { withAuth, session };
