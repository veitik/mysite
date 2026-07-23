from playwright.sync_api import sync_playwright

def capture_screenshots():
    with sync_playwright() as p:
        browser = p.chromium.launch(headless=True)
        page = browser.new_page(viewport={"width": 1440, "height": 900})

        print("Capturing old site...")
        try:
            page.goto("https://ckfenix.ru/", timeout=30000)
            page.wait_for_timeout(3000)
            page.screenshot(path="public/fenix-old.jpg", full_page=False)
            print("Captured old site.")
        except Exception as e:
            print(f"Error loading old site: {e}")

        print("Capturing new site...")
        try:
            page.goto("https://sdfsdsdsdfg.store", timeout=30000)
            page.wait_for_timeout(3000)
            page.screenshot(path="public/fenix-new.jpg", full_page=False)
            print("Captured new site.")
        except Exception as e:
            print(f"Error loading new site: {e}")

        browser.close()

if __name__ == "__main__":
    capture_screenshots()
