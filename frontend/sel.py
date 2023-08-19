import json
from selenium import webdriver
from selenium.webdriver.chrome.service import Service
from selenium.webdriver.common.by import By
from selenium.webdriver.support import expected_conditions as EC
import time
options = webdriver.ChromeOptions()
options.add_experimental_option('excludeSwitches', ['enable-logging'])
se = Service(executable_path='C:\\Users\\97252\\OneDrive\\שולחן העבודה\\chromedriver-win64\\chromedriver.exe')
driver = webdriver.Chrome(options=options, service=se)

# Navigate to the URL first
file = open("config.json","r")
data = json.load(file)

driver.get(data["url"])


# Then find the element
username_box = driver.find_element(By.ID, "name")
username_box.send_keys("ben")

username_box = driver.find_element(By.ID, "title")
username_box.send_keys("london")


username_box = driver.find_element(By.ID, "opinion")
username_box.send_keys("very nice place")

addBtn= driver.find_element(By.CLASS_NAME,"add-button")
addBtn.click()


time.sleep(5)  # Sleep for 5 seconds
deleteBtn = driver.find_element(By.CLASS_NAME, "delete-button")
deleteBtn.click()