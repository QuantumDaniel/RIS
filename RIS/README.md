# 🩻 Radiology Information System (RIS)

A modern web-based **Radiology Information System (RIS)** designed to support radiologists in managing imaging workflows, reviewing examinations, and creating diagnostic reports.

The system provides a centralized and intuitive workspace for managing radiology worklists, patient studies, reports, notifications, and radiology-related tasks.

> 🚧 **Project Status:** Active Development

---

## 📌 About the Project

The Radiology Information System is a healthcare-focused web application designed around the workflow of a radiology department.

The primary goal is to provide radiologists with a clean and efficient digital workspace where they can manage imaging examinations from the worklist through interpretation and reporting.

The project is also being developed as a practical application of modern frontend technologies to medical imaging and healthcare workflows.

---

## 🎯 Project Objectives

The system aims to:

- Improve radiologist workflow
- Provide an organized examination worklist
- Make patient and study information easily accessible
- Simplify radiology reporting
- Reduce unnecessary manual processes
- Provide quick access to previous examinations
- Improve communication and issue reporting
- Provide a foundation for future PACS/DICOM integration

---

# ✨ Features

## 🩻 Radiologist Dashboard

The dashboard provides a centralized overview of the radiologist's activities.

It includes:

- Examination statistics
- Pending studies
- Completed studies
- Recent activities
- Notifications
- Quick access to important functions

---

## 📋 Radiology Worklist

The worklist provides radiologists with an organized view of examinations requiring attention.

Radiologists can view information such as:

- Patient ID
- Study/Accession Number
- Examination type
- Modality
- Examination date
- Referring physician
- Study status

Example workflow statuses include:

- Pending
- In Progress
- Reported
- Completed

---

## 👤 Patient & Study Information

The system provides relevant patient and examination information required for the reporting workflow.

Depending on the implementation, this may include:

- Patient identification
- Study number
- Examination type
- Modality
- Clinical history
- Referring physician
- Examination date
- Study status

---

## 🖼️ Medical Image Access

The RIS interface is designed to support access to medical imaging studies.

Potential modalities include:

- X-ray
- CT
- MRI
- Ultrasound
- Mammography
- Other DICOM-compatible modalities

> PACS and DICOM functionality will depend on the backend and imaging infrastructure integrated with the system.

---

## 📄 Radiology Reporting

The reporting workflow allows radiologists to document their interpretation of imaging examinations.

Typical workflow:

```text
Open Worklist
      ↓
Select Examination
      ↓
Review Patient Information
      ↓
Review Images
      ↓
Interpret Examination
      ↓
Enter Findings
      ↓
Write Impression
      ↓
Save Draft
      ↓
Finalize Report