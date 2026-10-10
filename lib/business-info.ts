/** Business details maintained in one place for the site's public pages. */
const suppliedReviewsUrl = "https://www.google.com/maps/place/A%26J%E2%80%99s+Bean+Machine/@43.5376729,-116.5160719,17z/data=!4m8!3m7!1s0x54ae4f0063505867:0xfa2246dc9e2536c!8m2!3d43.5376729!4d-116.513497!9m1!1b1!16s%2Fg%2F11zdd_js35?entry=ttu";
const contactEmail = "han472230@gmail.com";
// FormSubmit provides this public form ID after the inbox owner activates the form.
const formId = process.env.FORMSUBMIT_FORM_ID?.trim();
const formDestination = formId && /^[a-zA-Z0-9]+$/.test(formId) ? formId : contactEmail;

export const businessInfo = {
  name: "A&J’s Bean Machine",
  address: "3209 S Happy Valley Rd, Nampa, ID 83686, United States",
  hours: "Monday–Saturday · 6:30 AM–6:00 PM",
  sundayHours: "Sunday closed",
  mapsUrl: "https://maps.app.goo.gl/GnJaW122Wwdj2m4h8",
  reviewUrl: suppliedReviewsUrl,
  contactEmail,
  contactFormUrl: `https://formsubmit.co/${formDestination}`,
  facebookUrl: "https://www.facebook.com/profile.php?id=61566299785234&sk=photos",
  instagramUrl: "https://www.instagram.com/AJ_BEAN_MACHINE/",
} as const;
