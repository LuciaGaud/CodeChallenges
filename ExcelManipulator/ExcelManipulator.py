import pandas as pd
from tkinter import filedialog, Tk
import os
import sys
import time
"""os.chdir(os.path.dirname(os.path.abspath(__file__)))"""
def excel_to_csv(input_excel_file):
    output_directory = os.path.dirname(input_excel_file).replace("/", "\\")
        # Get the directory of the input Excel file
    """print("sys.executable is ",sys.executable)
    print("os.getcwd() is ",os.getcwd())
    print("os.path.dirname(os.path.abspath(__file__) is ",os.path.dirname(os.path.abspath(__file__)))
    if getattr(sys, 'frozen', False):
        print("getattr(sys,'frozen'):",getattr(sys,'frozen'))
        output_directory = os.path.dirname(sys.executable)
        print("it is frozen and the directory is",output_directory)
    else:
        output_directory = os.path.dirname(os.path.abspath(__file__))"""
    print("Output directory is", output_directory)
    # Read the Excel file into a Pandas DataFrame
    xls = pd.ExcelFile(input_excel_file)

    # Iterate over each sheet in the Excel file
    for sheet_name in xls.sheet_names:
        # Read the sheet into a DataFrame
        df = pd.read_excel(xls, sheet_name)

        # Generate the output CSV file name with the full path
        output_csv_file = os.path.join(output_directory, f"{sheet_name}_output.csv")
        print(os.path.join(output_directory, f"{sheet_name}_output.csv"))
        # Write the DataFrame to the CSV file
        df.to_csv(output_csv_file, index=False)
        print(f"CSV file '{output_csv_file}' has been generated.")

if __name__ == "__main__":
    # Function to prompt user for Excel file using file dialog
    def choose_excel_file():
        root = Tk()
        root.withdraw()  # Hide the main window
        file_path = filedialog.askopenfilename(
            title="Select Excel File",
            filetypes=[("Excel files", "*.xlsx;*.xls")]
        )
        return file_path

    # Prompt the user to choose an Excel file
    input_excel_file = choose_excel_file()
    print("Current Working Directory:", os.getcwd())
    if input_excel_file:
        # Convert Excel to CSV using the directory of the Excel file
        excel_to_csv(input_excel_file)
    else:
        print("No Excel file selected.")
    time.sleep(10) 
