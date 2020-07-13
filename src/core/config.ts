import { generatePageUrl } from "./utils";

import dotenv from 'dotenv';

dotenv.config();

export const BASE_URL = "/";
export const PRODUCTS_PER_PAGE = 6;
export const SUPPORT_EMAIL = "support@example.com";

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
    href: process.env.FACEBOOK_URI,
    path: require("../images/facebook-icon.svg"),
  },
  {
    ariaLabel: "instagram",
    href: process.env.INSTAGRAM_URI,
    path: require("../images/instagram-icon.svg"),
  },
  {
    ariaLabel: "twitter",
    href: process.env.TWITTER_URI,
    path: require("../images/twitter-icon.svg"),
  },
  {
    ariaLabel: "youtube",
    href: process.env.YOUTUBE_URI,
    path: require("../images/youtube-icon.svg"),
  },
];
export const META_DEFAULTS = {
  custom: [],
  description:
    "Neural's E-commerce Storefront",
  image: `${window.location.origin}${require("../images/logo.svg")}`,
  title: process.env.SHOP_NAME,
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
