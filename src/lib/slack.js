"use strict";

const BASE_API_URL = import.meta.env.VITE_BASE_API_URL;

const RATE_LIMIT_INTERVAL = 1000 * 60 ; // 1 minute
const RATE_LIMIT_KEY = "lastSubmissionTime";

function checkRateLimit() {
  const lastSubmissionTime = localStorage.getItem(RATE_LIMIT_KEY);
  const currentTime = Date.now();

  if (lastSubmissionTime && currentTime - parseInt(lastSubmissionTime) < RATE_LIMIT_INTERVAL) {
    return false;
  }

  localStorage.setItem(RATE_LIMIT_KEY, currentTime.toString());
  return true;
}

export const sendPartnerRequest = async (message) => {
  if (!checkRateLimit()) {
    throw new Error("Please wait a minute before submitting again");
  }

  const response = await fetch(`${BASE_API_URL}/v2/notification/slack/partner`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(message),
  });

  return response.json();
};

export const sendInquiryRequest = async (message) => {
  if (!checkRateLimit()) {
    throw new Error("Please wait a minute before submitting again");
  }
  const response = await fetch(`${BASE_API_URL}/v2/notification/slack/inquiry`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(message),
  });

  return response.json();
};

