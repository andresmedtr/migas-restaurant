export function gtmPush(event, params = {}) {
  if (typeof window === "undefined") return;
  window.dataLayer = window.dataLayer || [];
  window.dataLayer.push({ event, ...params });
}

/** High-level event helpers (use these in your UI) **/
export function trackUberEatsClick(location = "unknown") {
  gtmPush("ubereats_click", { location });
}
export function trackToastClick(location = "unknown") {
  gtmPush("toast_click", { location });
}
export function trackDoordashClick(location = "unknown") {
  gtmPush("doordash_click", { location });
}
export function trackGrubhubClick(location = "unknown") {
  gtmPush("grubhub_click", { location });
}
export function trackAddressClick(placement = "unknown") {
  gtmPush("address_click", { placement });
}

export function trackPhoneClick(placement = "unknown", phone = "+19544384242") {
  gtmPush("phone_click", { placement, phone });
}

export function trackContactSubmit(status = "success", form = "Contact") {
  // status: "success" | "error" | "invalid"
  gtmPush("contact_form_submit", { status, form });
}

export function trackMenuView(section = "main") {
  gtmPush("menu_view", { section });
}

export function trackButtonClick(label, context = {}) {
  gtmPush("ui_button_click", { label, ...context });
}
