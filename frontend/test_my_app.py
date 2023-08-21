import pytest
from sel import setup_driver, navigate_to_site, add_item, delete_item
from selenium.webdriver.common.by import By
import time

def test_add_and_delete():
    driver = setup_driver()
    navigate_to_site(driver)
    initial_items = driver.find_elements(By.CLASS_NAME, "card")
    initial_count = len(initial_items)
    print(f'Initial item count: {initial_count}')
    add_item(driver, name="ben", title="london", opinion="very nice place")

    time.sleep(2)
    added_items = driver.find_elements(By.CLASS_NAME, "card")
    added_count = len(added_items)
    print(f'Added item count: {added_count}')
    assert added_count == initial_count + 1, "Item was not added!"

    delete_item(driver, name="ben", title="london", opinion="very nice place")

    time.sleep(2)
    deleted_items = driver.find_elements(By.CLASS_NAME, "card")
    deleted_count = len(deleted_items)
    print(f'Deleted item count: {deleted_count}')
    assert deleted_count == initial_count, "Item was not deleted!"

    driver.quit()

