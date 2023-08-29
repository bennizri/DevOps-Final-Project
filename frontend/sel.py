from selenium import webdriver
from selenium.webdriver.chrome.service import Service
from selenium.webdriver.common.by import By
import time
import json
from webdriver_manager.chrome import ChromeDriverManager
def setup_driver():
    options = webdriver.ChromeOptions()
    options.add_experimental_option('excludeSwitches', ['enable-logging'])
    options.add_argument("no-sandbox")
    options.add_argument("headless")
    options.add_argument("window-size=1400,2100")
    se = Service(ChromeDriverManager().install())
# se = Service(executable_path='C:\\Users\\97252\\OneDrive\\שולחן העבודה\\chromedriver-win64\\chromedriver.exe')
    return webdriver.Chrome(options=options, service=se)
def add_item(driver, name, title, opinion):
    username_box = driver.find_element(By.ID, "name")
    username_box.send_keys(name)

    username_box = driver.find_element(By.ID, "title")
    username_box.send_keys(title)

    username_box = driver.find_element(By.ID, "opinion")
    username_box.send_keys(opinion)

    addBtn = driver.find_element(By.CLASS_NAME, "add-button")
    addBtn.click()
    print(f"Added Item - Name: {name}, Title: {title}, Opinion: {opinion}")
def delete_item(driver, name, title, opinion):
    time.sleep(5)  # Sleep for 5 seconds
    deleteBtn = driver.find_element(By.CLASS_NAME, "delete-button")
    deleteBtn.click()
    print(f"Deleted Item - Name: {name}, Title: {title}, Opinion: {opinion}")

def navigate_to_site(driver):
    driver.get("http://localhost:80/")
    
