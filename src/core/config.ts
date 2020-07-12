import { generatePageUrl } from "./utils";

export const BASE_URL = "/";
export const PRODUCTS_PER_PAGE = 6;
export const SUPPORT_EMAIL = "support@example.com";
export const FACEBOOK_URL = process.env.FACEBOOK_URL;
export const INSTAGRAM_URL = process.env.INSTAGRAM_URL;
export const TWITTER_URL = process.env.TWITTER_URL;
export const YOUTUBE_URL = process.env.YOUTUBE_URL;

export const PROVIDERS = {
  BRAINTREE: {
    label: "Braintree",
  },
  DUMMY: {
    label: "Dummy",
  },
  STRIPE: {
    href: "https://js.stripe.com/v3/",
    label: "Stripe",
  },
};
export const STATIC_PAGES = [
  {
    label: "About",
    url: generatePageUrl("about"),
  },
];
export const SOCIAL_MEDIA = [
  {
    ariaLabel: "facebook",
    href: FACEBOOK_URL,
    path: require("../images/facebook-icon.svg"),
  },
  {
    ariaLabel: "instagram",
    href: INSTAGRAM_URL,
    path: require("../images/instagram-icon.svg"),
  },
  {
    ariaLabel: "twitter",
    href: TWITTER_URL,
    path: require("../images/twitter-icon.svg"),
  },
  {
    ariaLabel: "youtube",
    href: YOUTUBE_URL,
    path: require("../images/youtube-icon.svg"),
  },
];
export const META_DEFAULTS = {
  custom: [],
  description:
    "Open-source PWA storefront built with Saleor's e-commerce GraphQL API. Written with React and TypeScript.",
  image: `${window.location.origin}${require("../images/logo.svg")}`,
  title: "Demo PWA Storefront – Saleor Commerce",
  type: "website",
  url: window.location.origin,
};
export enum CheckoutStep {
  Address = 1,
  Shipping,
  Payment,
  Review,
}
export const CHECKOUT_STEPS = [
  {
    index: 0,
    link: "/checkout/address",
    name: "Address",
    nextActionName: "Continue to Shipping",
    nextStepLink: "/checkout/shipping",
    onlyIfShippingRequired: true,
    step: CheckoutStep.Address,
  },
  {
    index: 1,
    link: "/checkout/shipping",
    name: "Shipping",
    nextActionName: "Continue to Payment",
    nextStepLink: "/checkout/payment",
    onlyIfShippingRequired: true,
    step: CheckoutStep.Shipping,
  },
  {
    index: 2,
    link: "/checkout/payment",
    name: "Payment",
    nextActionName: "Continue to Review",
    nextStepLink: "/checkout/review",
    onlyIfShippingRequired: false,
    step: CheckoutStep.Payment,
  },
  {
    index: 3,
    link: "/checkout/review",
    name: "Review",
    nextActionName: "Place order",
    nextStepLink: "/order-finalized",
    onlyIfShippingRequired: false,
    step: CheckoutStep.Review,
  },
];
