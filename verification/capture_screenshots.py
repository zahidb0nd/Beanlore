from playwright.sync_api import sync_playwright

def run(playwright):
    browser = playwright.chromium.launch(headless=True)
    page = browser.new_page(viewport={"width": 1280, "height": 720})

    # Navigate to the local server
    page.goto("http://localhost:8080")

    # Wait for the page to load completely
    page.wait_for_load_state("networkidle")

    # Take a full page screenshot
    page.screenshot(path="verification/full_page.png", full_page=True)

    print("Screenshot saved to verification/full_page.png")

    browser.close()

with sync_playwright() as playwright:
    run(playwright)
