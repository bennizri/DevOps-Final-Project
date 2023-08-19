from selenium import webdriver
from selenium.webdriver.chrome.service import Service
from selenium.webdriver.common.by import By
import time
import json

def setup_driver():
    options = webdriver.ChromeOptions()
    options.add_experimental_option('excludeSwitches', ['enable-logging'])
    se = Service(executable_path='C:\\Users\\97252\\OneDrive\\שולחן העבודה\\chromedriver-win64\\chromedriver.exe')
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

def delete_item(driver):
    time.sleep(5)  # Sleep for 5 seconds
    deleteBtn = driver.find_element(By.CLASS_NAME, "delete-button")
    deleteBtn.click()

def navigate_to_site(driver):
    file = open("config.json","r")
    data = json.load(file)
    driver.get(data["url"])
