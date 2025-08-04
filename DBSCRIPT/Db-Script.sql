--Name : DHRUVI
--Date : 02/01/24
IF NOT EXISTS(SELECT * FROM [CFS_BONDED_WAREHOUSE_History].Information_schema.Columns WHERE Table_name = 'trnContainerDestuffing_History' and Column_name = 'trnContainerDestuffWorkOrderDetailsID')
BEGIN
	ALTER table [CFS_BONDED_WAREHOUSE_History].[dbo].trnContainerDestuffing_History ADD trnContainerDestuffWorkOrderDetailsID INT NULL
END
-------------------------------------
IF NOT EXISTS(SELECT * FROM [CFS_BONDED_WAREHOUSE].Information_schema.Columns WHERE Table_name = 'trnContainerDestuffing' and Column_name = 'trnContainerDestuffWorkOrderDetailsID')
BEGIN
	ALTER TABLE [CFS_BONDED_WAREHOUSE].[dbo].trnContainerDestuffing ADD trnContainerDestuffWorkOrderDetailsID INT NULL
END

------------------------------------------------------------------------
use [CFS_BONDED_WAREHOUSE]
GO
IF EXISTS (SELECT * FROM [CFS_BONDED_WAREHOUSE].sys.triggers WHERE [name] = 'TGR_trnContainerDestuffingGW' AND [type] = 'TR')
BEGIN
	  DROP TRIGGER [dbo].[TGR_trnContainerDestuffingGW]
END

IF EXISTS (SELECT * FROM [CFS_BONDED_WAREHOUSE].sys.triggers WHERE [name] = 'TGR_trnContainerDestuffingItems' AND [type] = 'TR')
BEGIN		
	  DROP TRIGGER  [dbo].[TGR_trnContainerDestuffingItems] on database 
END
GO
------------------
IF NOT EXISTS (select * from [Admin].[GeneralSettings] where [StrKey] = 'EXBND' and flagdeleted = 0)
BEGIN
		INSERT INTO [Admin].[GeneralSettings]
		([StrKey],[StrValue],[ModuleName],[Description],[Createdby],[CreatedDate])
		VALUES
		('EXBND','EXDOE/##FINANCIALYEAR##/','Prefix','EX-BOND DOCUMENT ENTRY','1',[dbo].[GetCurrentDatetime]())
END
GO
-----------
IF NOT EXISTS (select * from [Admin].[GeneralSettings] where [StrKey] = 'EXBRF' and flagdeleted = 0)
BEGIN
		INSERT INTO [Admin].[GeneralSettings]
		([StrKey],[StrValue],[ModuleName],[Description],[Createdby],[CreatedDate])
		VALUES
		('EXBRF','EXBRF-','Prefix','EX-BOND Reference No','1',[dbo].[GetCurrentDatetime]())
END
GO
--------------
update  admin.pagemenu set controller= 'trnEmptyContainerOutWO' where controller= 'trnEmptyContainerOutWOGW'
GO
--------
IF (EXISTS (SELECT * FROM INFORMATION_SCHEMA.TABLES WHERE TABLE_SCHEMA = 'dbo' AND  TABLE_NAME = 'trnEmptyContainerOutWOGW'))
BEGIN
	drop table trnEmptyContainerOutWOGW
END
GO
------
IF (EXISTS (SELECT * FROM INFORMATION_SCHEMA.TABLES WHERE TABLE_SCHEMA = 'dbo' AND  TABLE_NAME = 'trnEmptyContainerOutWOGWDetails'))
BEGIN
	drop table trnEmptyContainerOutWOGWDetails
END
GO
------------------
--Name :DHRUVI
--Date :: 05/01/2024
IF NOT EXISTS (select * from [Admin].[GeneralSettings] where [StrKey] = 'CDWO' and flagdeleted = 0)
BEGIN
		INSERT INTO [Admin].[GeneralSettings]
		([StrKey],[StrValue],[ModuleName],[Description],[Createdby],[CreatedDate])
		VALUES
		('CDWO','CDWO/##FINANCIALYEAR##/','Prefix','Container Destuffing WorkOrder','1',[dbo].[GetCurrentDatetime]())
END
GO
-------------------------------------


IF NOT EXISTS(SELECT * FROM [CFS_BONDED_WAREHOUSE].Information_schema.Columns WHERE Table_name = 'trnWorkOrderOutLotDetails' and Column_name = 'TransactionType')
BEGIN
	ALTER TABLE [CFS_BONDED_WAREHOUSE].[dbo].trnWorkOrderOutLotDetails ADD TransactionType varchar(255) NULL
END

IF NOT EXISTS(SELECT * FROM [CFS_BONDED_WAREHOUSE_History].Information_schema.Columns WHERE Table_name = 'trnWorkOrderOutLotDetails_History' and Column_name = 'TransactionType')
BEGIN
	ALTER table [CFS_BONDED_WAREHOUSE_History].[dbo].trnWorkOrderOutLotDetails_History ADD TransactionType varchar(255) NULL
END


IF NOT EXISTS(SELECT * FROM [CFS_BONDED_WAREHOUSE].Information_schema.Columns WHERE Table_name = 'trnWorkOrderOutLotDetails' and Column_name = 'trnExBondDocumentEntryDetailsID')
BEGIN
	ALTER TABLE [CFS_BONDED_WAREHOUSE].[dbo].trnWorkOrderOutLotDetails ADD trnExBondDocumentEntryDetailsID int NULL
END

IF NOT EXISTS(SELECT * FROM [CFS_BONDED_WAREHOUSE_History].Information_schema.Columns WHERE Table_name = 'trnWorkOrderOutLotDetails_History' and Column_name = 'trnExBondDocumentEntryDetailsID')
BEGIN
	ALTER table [CFS_BONDED_WAREHOUSE_History].[dbo].trnWorkOrderOutLotDetails_History ADD trnExBondDocumentEntryDetailsID int NULL
END
-------
--nisha:08-01-2024
 ---------------------------
 update admin.PageMenu set controller= 'trnEmptyTruckGateIn' where controller= 'trnEmptyTruckGateIn'
GO
----------
IF EXISTS (select * from INFORMATION_SCHEMA.COLUMNS where COLUMN_NAME like '%trnexportstufingwoGWContainerDetailsID%')
BEGIN
	 EXEC sp_rename 'dbo.trnexportmovementWOContainerDetails.trnexportstufingwoGWContainerDetailsID', 'trnexportstufingwoContainerDetailsID', 'COLUMN';
END
GO
----------------------

IF EXISTS(SELECT * FROM [CFS_BONDED_WAREHOUSE].[admin].pagemenu WHERE Controller = 'trnEmptyTruckGateIn' AND ParentID=157)
BEGIN
UPDATE [Admin].[PageMenu] SET Controller='trnEmptyTruckGateInep'  WHERE ParentID=157 and Controller = 'trnEmptyTruckGateIn'
END
GO
IF EXISTS(SELECT * FROM [CFS_BONDED_WAREHOUSE].[admin].pagemenu WHERE Controller = 'trnEmptyTruckGateIn' AND ParentID	=152)
BEGIN
UPDATE [Admin].[PageMenu] SET Controller='trnEmptyTruckGateInlco' WHERE ParentID=152 and Controller = 'trnEmptyTruckGateIn'
END
GO
IF EXISTS(SELECT * FROM [CFS_BONDED_WAREHOUSE].[admin].pagemenu WHERE Controller = 'trnEmptyTruckGateIn' AND ParentID=148)
BEGIN
UPDATE [Admin].[PageMenu] SET Controller='trnEmptyTruckGateInco'  WHERE ParentID=148 and Controller = 'trnEmptyTruckGateIn'
END
GO
IF EXISTS(SELECT * FROM [CFS_BONDED_WAREHOUSE].[admin].pagemenu WHERE Controller = 'trnEmptyTruckGateIn' AND ParentID=147)
BEGIN
UPDATE [Admin].[PageMenu] SET Controller='trnEmptyTruckGateIneco' WHERE ParentID=147 and Controller = 'trnEmptyTruckGateIn'
END
GO
---------------
 update admin.PageMenu set controller= 'trnWeighmentCashInvoice' where controller= 'trnEmptyTruckGateIn'
GO
---

IF EXISTS(SELECT * FROM [CFS_BONDED_WAREHOUSE].[admin].pagemenu WHERE Controller = 'trnWeighmentCashInvoice' AND ParentID=141)
BEGIN
UPDATE [Admin].[PageMenu] SET Controller='trnWeighmentCashInvoiceCI'  WHERE ParentID=141 and Controller = 'trnWeighmentCashInvoice'
END
GO
IF EXISTS(SELECT * FROM [CFS_BONDED_WAREHOUSE].[admin].pagemenu WHERE Controller = 'trnWeighmentCashInvoice' AND ParentID=142)
BEGIN
UPDATE [Admin].[PageMenu] SET Controller='trnWeighmentCashInvoiceLCI' WHERE ParentID=142 and Controller = 'trnWeighmentCashInvoice'
END
GO
IF EXISTS(SELECT * FROM [CFS_BONDED_WAREHOUSE].[admin].pagemenu WHERE Controller = 'trnWeighmentCashInvoice' AND ParentID=148)
BEGIN
UPDATE [Admin].[PageMenu] SET Controller='trnWeighmentCashInvoiceCO'  WHERE ParentID=148 and Controller = 'trnWeighmentCashInvoice'
END
GO
IF EXISTS(SELECT * FROM [CFS_BONDED_WAREHOUSE].[admin].pagemenu WHERE Controller = 'trnWeighmentCashInvoice' AND ParentID=152)
BEGIN
UPDATE [Admin].[PageMenu] SET Controller='trnWeighmentCashInvoiceLCO' WHERE ParentID=152 and Controller = 'trnWeighmentCashInvoice' 
END
GO
-------------------
IF EXISTS(SELECT * FROM [CFS_BONDED_WAREHOUSE].[admin].pagemenu WHERE Controller = 'trnWeighmentSlip' AND ParentID=141)
BEGIN
UPDATE [Admin].[PageMenu] SET Controller='trnWeighmentSlipCI'  WHERE ParentID=141 and Controller = 'trnWeighmentSlip'
END
GO
IF EXISTS(SELECT * FROM [CFS_BONDED_WAREHOUSE].[admin].pagemenu WHERE Controller = 'trnWeighmentSlip' AND ParentID=142)
BEGIN
UPDATE [Admin].[PageMenu] SET Controller='trnWeighmentSlipLCI' WHERE ParentID=142 and Controller = 'trnWeighmentSlip'
END
GO
IF EXISTS(SELECT * FROM [CFS_BONDED_WAREHOUSE].[admin].pagemenu WHERE Controller = 'trnWeighmentSlip' AND ParentID=148)
BEGIN
UPDATE [Admin].[PageMenu] SET Controller='trnWeighmentSlipCO'  WHERE ParentID=148 and Controller = 'trnWeighmentSlip'
END
GO
IF EXISTS(SELECT * FROM [CFS_BONDED_WAREHOUSE].[admin].pagemenu WHERE Controller = 'trnWeighmentSlip' AND ParentID=152)
BEGIN
UPDATE [Admin].[PageMenu] SET Controller='trnWeighmentSlipLCO' WHERE ParentID=152 and Controller = 'trnWeighmentSlip' 
END
GO
IF EXISTS(SELECT * FROM [CFS_BONDED_WAREHOUSE].[admin].pagemenu WHERE Controller = 'trnWeighmentSlip' AND ParentID=157)
BEGIN
UPDATE [Admin].[PageMenu] SET Controller='trnWeighmentSlipEP' WHERE ParentID=157 and Controller = 'trnWeighmentSlip' 
END
GO
-----------------
IF EXISTS(SELECT * FROM [CFS_BONDED_WAREHOUSE].[admin].pagemenu WHERE Controller = 'trnEmptyTruckOutWO' AND PageMenuID=141)
BEGIN
UPDATE [Admin].PageMenu  SET Controller='trnEmptyTruckOutWOCI' WHERE PageMenuID=141 and Controller = 'trnEmptyTruckOutWO'
END
GO
IF EXISTS(SELECT * FROM [CFS_BONDED_WAREHOUSE].[admin].pagemenu WHERE Controller = 'trnEmptyTruckOutWO' AND PageMenuID=142)
BEGIN
UPDATE [Admin].PageMenu  SET Controller='trnEmptyTruckOutWOLCI' WHERE PageMenuID=142 and Controller = 'trnEmptyTruckOutWO'
END
GO
---------------------------
IF EXISTS (select * from INFORMATION_SCHEMA.COLUMNS where COLUMN_NAME like '%trnexportstufingwoGWContainerDetailsID%')
BEGIN
	 EXEC sp_rename 'dbo.trnexportmovementWOContainerDetails_history.trnexportstufingwoGWContainerDetailsID', 'trnexportstufingwoContainerDetailsID', 'COLUMN';
END
GO
-------------------
IF NOT EXISTS(SELECT * FROM [CFS_BONDED_WAREHOUSE].Information_schema.Columns WHERE Table_name = 'trnCargoTruckOutwardCumGatepassDetails' and Column_name = 'trnExBondDocumentEntryDetailsID')
BEGIN
	ALTER TABLE [CFS_BONDED_WAREHOUSE].[DBO].[trnCargoTruckOutwardCumGatepassDetails] ADD trnExBondDocumentEntryDetailsID int NULL
END
GO
-------------------
IF NOT EXISTS(SELECT * FROM [CFS_BONDED_WAREHOUSE_History].Information_schema.Columns WHERE Table_name = 'trnCargoTruckOutwardCumGatepassDetails_History' and Column_name = 'trnExBondDocumentEntryDetailsID')
BEGIN
	ALTER TABLE [CFS_BONDED_WAREHOUSE_History].[DBO].[trnCargoTruckOutwardCumGatepassDetails_history] ADD trnExBondDocumentEntryDetailsID int NULL
END
GO
-------------------
IF NOT EXISTS(SELECT * FROM [CFS_BONDED_WAREHOUSE].Information_schema.Columns WHERE Table_name = 'trnExportCLPBOEItems' and Column_name = 'trnExBondDocumentEntryDetailsID')
BEGIN
	ALTER TABLE [CFS_BONDED_WAREHOUSE].[DBO].[trnExportCLPBOEItems] ADD trnExBondDocumentEntryDetailsID int NULL
END
GO
-------------------
IF NOT EXISTS(SELECT * FROM [CFS_BONDED_WAREHOUSE_History].Information_schema.Columns WHERE Table_name = 'trnExportCLPBOEItems_History' and Column_name = 'trnExBondDocumentEntryDetailsID')
BEGIN
	ALTER TABLE [CFS_BONDED_WAREHOUSE_History].[DBO].[trnExportCLPBOEItems_history] ADD trnExBondDocumentEntryDetailsID int NULL
END
GO
IF NOT EXISTS(SELECT * FROM [CFS_BONDED_WAREHOUSE_History].Information_schema.Columns WHERE Table_name = 'trnCargoTruckOutwardCumGatepassDetails_History' and Column_name = 'trnDestuffingID')
BEGIN
	ALTER TABLE [CFS_BONDED_WAREHOUSE_History].[DBO].[trnCargoTruckOutwardCumGatepassDetails_History] ADD trnDestuffingID int NULL
END
GO
-------------------
IF NOT EXISTS(SELECT * FROM [CFS_BONDED_WAREHOUSE_History].Information_schema.Columns WHERE Table_name = 'trnCargoTruckOutwardCumGatepassDetails_History' and Column_name = 'Type')
BEGIN
	ALTER TABLE [CFS_BONDED_WAREHOUSE_History].[DBO].[trnCargoTruckOutwardCumGatepassDetails_History] ADD Type varchar(1) NULL
END
GO
-------------------
IF EXISTS (select * from [CFS_BONDED_WAREHOUSE].INFORMATION_SCHEMA.COLUMNS where COLUMN_NAME like '%trnEmptyTruckGateInEmptyID%' and TABLE_NAME = 'trnEmptyContainerOutGatePassDetails')
BEGIN
USE [CFS_BONDED_WAREHOUSE]
	 EXEC sp_rename 'dbo.trnEmptyContainerOutGatePassDetails.trnEmptyTruckGateInEmptyID', 'trnEmptyContainerOutWODetailsID', 'COLUMN';
	 USE [CFS_BONDED_WAREHOUSE]
END
GO
-------------------
IF EXISTS (select * from [CFS_BONDED_WAREHOUSE_History].INFORMATION_SCHEMA.COLUMNS where COLUMN_NAME like '%trnEmptyTruckGateInEmptyID%' and TABLE_NAME = 'trnEmptyContainerOutGatePassDetails_History')
BEGIN
	USE [CFS_BONDED_WAREHOUSE_History]
	 EXEC sp_rename 'dbo.trnEmptyContainerOutGatePassDetails_History.trnEmptyTruckGateInEmptyID', 'trnEmptyContainerOutWODetailsID', 'COLUMN';
	 USE [CFS_BONDED_WAREHOUSE]
END
GO
--------------
update  admin.pagemenu set controller= 'trnLoadedContainerOutWO' where controller= 'trnLoadedContainerOutWOGW'
GO
---------------------
IF EXISTS(SELECT * from [CFS_BONDED_WAREHOUSE_History].INFORMATION_SCHEMA.COLUMNS WHERE TABLE_NAME ='trnLoadedContainerOutWOGW_History')
BEGIN
	USE [CFS_BONDED_WAREHOUSE_History]
	DROP TABLE 	[CFS_BONDED_WAREHOUSE_History].[dbo].[trnLoadedContainerOutWOGW_History]
	USE [CFS_BONDED_WAREHOUSE]
END
GO
---------------------
IF EXISTS(SELECT * from [CFS_BONDED_WAREHOUSE_History].INFORMATION_SCHEMA.COLUMNS WHERE TABLE_NAME ='trnLoadedContainerOutWOGWDetails_History')
BEGIN
	USE [CFS_BONDED_WAREHOUSE_History]
	DROP TABLE 	[dbo].[trnLoadedContainerOutWOGWDetails_History]
	USE [CFS_BONDED_WAREHOUSE]
END
GO
--------------------
IF NOT EXISTS(SELECT * from [CFS_BONDED_WAREHOUSE].INFORMATION_SCHEMA.COLUMNS WHERE TABLE_NAME ='trnLoadedContainerOutWODetails' and COLUMN_NAME = 'trnExBondDocumentEntryDetailsID')
BEGIN
	ALTER TABLE	[CFS_BONDED_WAREHOUSE].[DBO].[trnLoadedContainerOutWODetails] ADD [trnExBondDocumentEntryDetailsID] int NULL
END
GO
--------------------
UPDATE Admin.GeneralSettings set StrValue = 'NOC/##FINANCIALYEAR##/' where StrKey = 'TRNDO'
GO
-----------------
IF NOT EXISTS(SELECT * from [CFS_BONDED_WAREHOUSE].INFORMATION_SCHEMA.COLUMNS WHERE TABLE_NAME ='trndocument' and COLUMN_NAME = 'ExpectedDateWH')
BEGIN
	ALTER TABLE	[CFS_BONDED_WAREHOUSE].[DBO].[trndocument] ADD ExpectedDateWH DATETIME NULL
END
GO
--------------
IF NOT EXISTS(SELECT * from [CFS_BONDED_WAREHOUSE].INFORMATION_SCHEMA.COLUMNS WHERE TABLE_NAME ='trndocument' and COLUMN_NAME = 'ExpectedReqPeriodInWH')
BEGIN
	ALTER TABLE	[CFS_BONDED_WAREHOUSE].[DBO].[trndocument] ADD ExpectedReqPeriodInWH INT NULL
END
GO
--------------
IF NOT EXISTS(SELECT * from [CFS_BONDED_WAREHOUSE].INFORMATION_SCHEMA.COLUMNS WHERE TABLE_NAME ='trndocument' and COLUMN_NAME = 'AdditionalArea')
BEGIN
	ALTER TABLE	[CFS_BONDED_WAREHOUSE].[DBO].[trndocument] ADD AdditionalArea decimal(18,2) NULL
END
GO
--------------
IF NOT EXISTS(SELECT * from [CFS_BONDED_WAREHOUSE].INFORMATION_SCHEMA.COLUMNS WHERE TABLE_NAME ='trndocument' and COLUMN_NAME = 'AreaRequired')
BEGIN
	ALTER TABLE	[CFS_BONDED_WAREHOUSE].[DBO].[trndocument] ADD AreaRequired decimal(18,2) NULL
END
GO
--------------
IF EXISTS (select * from [CFS_BONDED_WAREHOUSE].INFORMATION_SCHEMA.COLUMNS where COLUMN_NAME like '%TotalSpace%' and TABLE_NAME = 'trndocument')
BEGIN
	 EXEC sp_rename 'dbo.trndocument.TotalSpace', 'TotalArea', 'COLUMN';
END
GO
--------------
IF NOT EXISTS(SELECT * from [CFS_BONDED_WAREHOUSE].INFORMATION_SCHEMA.COLUMNS WHERE TABLE_NAME ='trndocument' and COLUMN_NAME = 'PortLoading')
BEGIN
	ALTER TABLE	[CFS_BONDED_WAREHOUSE].[DBO].[trndocument] ADD PortLoading varchar(max) NULL
END
GO
--------------
IF NOT EXISTS(SELECT * from [CFS_BONDED_WAREHOUSE].INFORMATION_SCHEMA.COLUMNS WHERE TABLE_NAME ='trndocument' and COLUMN_NAME = 'Consolidator')
BEGIN
	ALTER TABLE	[CFS_BONDED_WAREHOUSE].[DBO].[trndocument] ADD Consolidator varchar(max) NULL
END
GO
-----------------------------
IF NOT EXISTS(SELECT * from [CFS_BONDED_WAREHOUSE].INFORMATION_SCHEMA.COLUMNS WHERE TABLE_NAME ='trndocument' and COLUMN_NAME = 'ConsolidatorID')
BEGIN
	ALTER TABLE	[CFS_BONDED_WAREHOUSE].[DBO].[trndocument] ADD ConsolidatorID INT null
END
GO
--------------
IF NOT EXISTS(SELECT * from [CFS_BONDED_WAREHOUSE].INFORMATION_SCHEMA.COLUMNS WHERE TABLE_NAME ='trndocument' and COLUMN_NAME = 'Consolidator')
BEGIN
	ALTER TABLE	[CFS_BONDED_WAREHOUSE].[DBO].[trndocument] ADD CHAPerson varchar(max) NULL
END
GO
--------------
IF NOT EXISTS(SELECT * from [CFS_BONDED_WAREHOUSE].INFORMATION_SCHEMA.COLUMNS WHERE TABLE_NAME ='trndocument' and COLUMN_NAME = 'CHACellNo')
BEGIN
	ALTER TABLE	[CFS_BONDED_WAREHOUSE].[DBO].[trndocument] ADD CHACellNo varchar(max) NULL
END
GO
--------------
-----------------
IF NOT EXISTS(SELECT * from [CFS_BONDED_WAREHOUSE_History].INFORMATION_SCHEMA.COLUMNS WHERE TABLE_NAME ='trnDocument_history' and COLUMN_NAME = 'ExpectedDateWH')
BEGIN
	ALTER TABLE	[CFS_BONDED_WAREHOUSE_History].[DBO].[trnDocument_history] ADD ExpectedDateWH DATETIME NULL
END
GO
--------------
IF NOT EXISTS(SELECT * from [CFS_BONDED_WAREHOUSE_History].INFORMATION_SCHEMA.COLUMNS WHERE TABLE_NAME ='trnDocument_history' and COLUMN_NAME = 'ExpectedReqPeriodInWH')
BEGIN
	ALTER TABLE	[CFS_BONDED_WAREHOUSE_History].[DBO].[trnDocument_history] ADD ExpectedReqPeriodInWH INT NULL
END
GO
--------------
IF NOT EXISTS(SELECT * from [CFS_BONDED_WAREHOUSE_History].INFORMATION_SCHEMA.COLUMNS WHERE TABLE_NAME ='trnDocument_history' and COLUMN_NAME = 'AdditionalArea')
BEGIN
	ALTER TABLE	[CFS_BONDED_WAREHOUSE_History].[DBO].[trnDocument_history] ADD AdditionalArea decimal(18,2) NULL
END
GO
--------------
IF NOT EXISTS(SELECT * from [CFS_BONDED_WAREHOUSE_History].INFORMATION_SCHEMA.COLUMNS WHERE TABLE_NAME ='trnDocument_history' and COLUMN_NAME = 'AreaRequired')
BEGIN
	ALTER TABLE	[CFS_BONDED_WAREHOUSE_History].[DBO].[trnDocument_history] ADD AreaRequired decimal(18,2) NULL
END
GO
--------------
IF EXISTS (select * from [CFS_BONDED_WAREHOUSE_History].INFORMATION_SCHEMA.COLUMNS where COLUMN_NAME like '%TotalSpace%' and TABLE_NAME = 'trnDocument_history')
BEGIN
	 USE [CFS_BONDED_WAREHOUSE_History]
	 EXEC sp_rename 'dbo.trnDocument_history.TotalSpace', 'TotalArea', 'COLUMN';
END
GO
--------------
IF NOT EXISTS(SELECT * from [CFS_BONDED_WAREHOUSE_History].INFORMATION_SCHEMA.COLUMNS WHERE TABLE_NAME ='trnDocument_history' and COLUMN_NAME = 'PortLoading')
BEGIN
	ALTER TABLE	[CFS_BONDED_WAREHOUSE_History].[DBO].[trnDocument_history] ADD PortLoading varchar(max) NULL
END
GO
--------------
IF NOT EXISTS(SELECT * from [CFS_BONDED_WAREHOUSE_History].INFORMATION_SCHEMA.COLUMNS WHERE TABLE_NAME ='trnDocument_history' and COLUMN_NAME = 'Consolidator')
BEGIN
	ALTER TABLE	[CFS_BONDED_WAREHOUSE_History].[DBO].[trnDocument_history] ADD Consolidator varchar(max) NULL
END
GO
-----------------------------
IF NOT EXISTS(SELECT * from [CFS_BONDED_WAREHOUSE_History].INFORMATION_SCHEMA.COLUMNS WHERE TABLE_NAME ='trnDocument_history' and COLUMN_NAME = 'ConsolidatorID')
BEGIN
	ALTER TABLE	[CFS_BONDED_WAREHOUSE_History].[DBO].[trnDocument_history] ADD ConsolidatorID INT null
END
GO
--------------
IF NOT EXISTS(SELECT * from [CFS_BONDED_WAREHOUSE_History].INFORMATION_SCHEMA.COLUMNS WHERE TABLE_NAME ='trnDocument_history' and COLUMN_NAME = 'Consolidator')
BEGIN
	ALTER TABLE	[CFS_BONDED_WAREHOUSE_History].[DBO].[trnDocument_history] ADD CHAPerson varchar(max) NULL
END
GO
--------------
IF NOT EXISTS(SELECT * from [CFS_BONDED_WAREHOUSE_History].INFORMATION_SCHEMA.COLUMNS WHERE TABLE_NAME ='trnDocument_history' and COLUMN_NAME = 'CHACellNo')
BEGIN
	ALTER TABLE	[CFS_BONDED_WAREHOUSE_History].[DBO].[trnDocument_history] ADD CHACellNo varchar(max) NULL
END
GO
--------------
USE CFS_BONDED_WAREHOUSE
GO
--------------
IF NOT EXISTS(SELECT * from [CFS_BONDED_WAREHOUSE].INFORMATION_SCHEMA.COLUMNS WHERE TABLE_NAME ='trnDocumentLotDetails' and COLUMN_NAME = 'NOCDateandTime')
BEGIN
	ALTER TABLE	[CFS_BONDED_WAREHOUSE].[DBO].[trnDocumentLotDetails] ADD NOCDateandTime datetime NULL
END
GO
--------------
IF NOT EXISTS(SELECT * from [CFS_BONDED_WAREHOUSE].INFORMATION_SCHEMA.COLUMNS WHERE TABLE_NAME ='trnDocumentLotDetails' and COLUMN_NAME = 'NOCValidFrom')
BEGIN
	ALTER TABLE	[CFS_BONDED_WAREHOUSE].[DBO].[trnDocumentLotDetails] ADD NOCValidFrom DateTime NULL
END
GO
--------------
IF NOT EXISTS(SELECT * from [CFS_BONDED_WAREHOUSE].INFORMATION_SCHEMA.COLUMNS WHERE TABLE_NAME ='trnDocumentLotDetails' and COLUMN_NAME = 'NOCValidTo')
BEGIN
	ALTER TABLE	[CFS_BONDED_WAREHOUSE].[DBO].[trnDocumentLotDetails] ADD NOCValidTo Datetime NULL
END
GO
--------------
IF NOT EXISTS(SELECT * from [CFS_BONDED_WAREHOUSE].INFORMATION_SCHEMA.COLUMNS WHERE TABLE_NAME ='trnDocumentLotDetails' and COLUMN_NAME = 'LicenceNo')
BEGIN
	ALTER TABLE	[CFS_BONDED_WAREHOUSE].[DBO].[trnDocumentLotDetails] ADD LicenceNo varchar(max) NULL
END
GO
-------------------
IF NOT EXISTS(SELECT * from [CFS_BONDED_WAREHOUSE_History].INFORMATION_SCHEMA.COLUMNS WHERE TABLE_NAME ='trnDocumentLotDetails_History' and COLUMN_NAME = 'NOCDateandTime')
BEGIN
	ALTER TABLE	[CFS_BONDED_WAREHOUSE_History].[DBO].[trnDocumentLotDetails_History] ADD NOCDateandTime datetime NULL
END
GO
--------------
IF NOT EXISTS(SELECT * from [CFS_BONDED_WAREHOUSE_History].INFORMATION_SCHEMA.COLUMNS WHERE TABLE_NAME ='trnDocumentLotDetails_History' and COLUMN_NAME = 'NOCValidFrom')
BEGIN
	ALTER TABLE	[CFS_BONDED_WAREHOUSE_History].[DBO].[trnDocumentLotDetails_History] ADD NOCValidFrom DateTime NULL
END
GO
--------------
IF NOT EXISTS(SELECT * from [CFS_BONDED_WAREHOUSE_History].INFORMATION_SCHEMA.COLUMNS WHERE TABLE_NAME ='trnDocumentLotDetails_History' and COLUMN_NAME = 'NOCValidTo')
BEGIN
	ALTER TABLE	[CFS_BONDED_WAREHOUSE_History].[DBO].[trnDocumentLotDetails_History] ADD NOCValidTo Datetime NULL
END
GO
--------------
IF NOT EXISTS(SELECT * from [CFS_BONDED_WAREHOUSE_History].INFORMATION_SCHEMA.COLUMNS WHERE TABLE_NAME ='trnDocumentLotDetails_History' and COLUMN_NAME = 'LicenceNo')
BEGIN
	ALTER TABLE	[CFS_BONDED_WAREHOUSE_History].[DBO].[trnDocumentLotDetails_History] ADD LicenceNo varchar(max) NULL
END
GO
--------------
USE CFS_BONDED_WAREHOUSE
GO
--------
IF NOT EXISTS(SELECT * from [CFS_BONDED_WAREHOUSE].INFORMATION_SCHEMA.COLUMNS WHERE TABLE_NAME ='trnDocument' and COLUMN_NAME = 'CHAPerson')
BEGIN
	ALTER TABLE	[CFS_BONDED_WAREHOUSE].[DBO].[trnDocument] ADD CHAPerson  VARCHAR(MAX) NULL
END
GO
IF NOT EXISTS(SELECT * from [CFS_BONDED_WAREHOUSE_History].INFORMATION_SCHEMA.COLUMNS WHERE TABLE_NAME ='trnDocument_history' and COLUMN_NAME = 'CHAPerson')
BEGIN
	ALTER TABLE	[CFS_BONDED_WAREHOUSE_History].[DBO].[trnDocument_history] ADD CHAPerson VARCHAR(MAX) NULL
END
GO

------------------------------------------------------
----------------------------------------------------
--Name : DHRUVI
--Date: 09/01/2024
IF EXISTS(SELECT * FROM [CFS_BONDED_WAREHOUSE].[admin].pagemenu WHERE Controller = 'trnExportDocumentDeclarationGW' AND PageMenuID=158)
BEGIN
UPDATE [CFS_BONDED_WAREHOUSE].[Admin].PageMenu  SET Controller='trnExportDocumentDeclaration' WHERE PageMenuID=158 and Controller = 'trnExportDocumentDeclarationGW'
END
GO

-------------------------------------------------------------------------------------------------------------
IF EXISTS (select * from INFORMATION_SCHEMA.COLUMNS where COLUMN_NAME='ShiipingBillNo' AND TABLE_NAME='trnExportDocumentDeclarationLotDetails_history')
BEGIN
USE CFS_BONDED_WAREHOUSE_History
	 EXEC sp_rename 'dbo.trnExportDocumentDeclarationLotDetails_history.ShiipingBillNo', 'BOENo', 'COLUMN';
END
GO
----------------------------
IF EXISTS (select * from CFS_BONDED_WAREHOUSE_History.INFORMATION_SCHEMA.COLUMNS where COLUMN_NAME='ShipingBillDate' AND TABLE_NAME='trnExportDocumentDeclarationLotDetails_history')
BEGIN
USE CFS_BONDED_WAREHOUSE_History
	 EXEC sp_rename 'dbo.trnExportDocumentDeclarationLotDetails_history.ShipingBillDate', 'BOEDate', 'COLUMN';
END
GO
-----------------------------
IF EXISTS (select * from CFS_BONDED_WAREHOUSE_History.INFORMATION_SCHEMA.COLUMNS where COLUMN_NAME='InvoiceNumber' AND TABLE_NAME='trnExportDocumentDeclarationLotDetails_history')
BEGIN
USE CFS_BONDED_WAREHOUSE_History
	 EXEC sp_rename 'dbo.trnExportDocumentDeclarationLotDetails_history.InvoiceNumber', 'BLNo', 'COLUMN';
END
GO
-----------------
IF EXISTS (select * from CFS_BONDED_WAREHOUSE_History.INFORMATION_SCHEMA.COLUMNS where COLUMN_NAME='InvoiceDate' AND TABLE_NAME='trnExportDocumentDeclarationLotDetails_history')
BEGIN
USE CFS_BONDED_WAREHOUSE_History
	 EXEC sp_rename 'dbo.trnExportDocumentDeclarationLotDetails_history.InvoiceDate', 'BLDate', 'COLUMN';
END
GO
-----------------------
IF EXISTS (select * from CFS_BONDED_WAREHOUSE_History.INFORMATION_SCHEMA.COLUMNS where COLUMN_NAME='SpaceCertificateID' AND TABLE_NAME='trnExportDocumentDeclarationLotDetails_history')
BEGIN
USE CFS_BONDED_WAREHOUSE_History
	 EXEC sp_rename 'dbo.trnExportDocumentDeclarationLotDetails_history.SpaceCertificateID', 'trnDocumentID', 'COLUMN';
END
GO
------------------------
IF EXISTS (select * from CFS_BONDED_WAREHOUSE_History.INFORMATION_SCHEMA.COLUMNS where COLUMN_NAME='SpaceCertificateNO' AND TABLE_NAME='trnExportDocumentDeclarationLotDetails_history')
BEGIN
USE CFS_BONDED_WAREHOUSE_History
	 EXEC sp_rename 'dbo.trnExportDocumentDeclarationLotDetails_history.SpaceCertificateNO', 'trnDocumentNo', 'COLUMN';
END
GO
---------------------

IF EXISTS (select * from INFORMATION_SCHEMA.COLUMNS where COLUMN_NAME='ShiipingBillNo' AND TABLE_NAME='trnExportDocumentDeclarationLotDetails')
BEGIN
USE CFS_BONDED_WAREHOUSE
	 EXEC sp_rename 'dbo.trnExportDocumentDeclarationLotDetails.ShiipingBillNo', 'BOENo', 'COLUMN';
END
GO
-------------------------------------
IF EXISTS (select * from CFS_BONDED_WAREHOUSE.INFORMATION_SCHEMA.COLUMNS where COLUMN_NAME='ShipingBillDate' AND TABLE_NAME='trnExportDocumentDeclarationLotDetails')
BEGIN
USE CFS_BONDED_WAREHOUSE
	 EXEC sp_rename 'dbo.trnExportDocumentDeclarationLotDetails.ShipingBillDate', 'BOEDate', 'COLUMN';
END
GO
--------------------------------
IF EXISTS (select * from CFS_BONDED_WAREHOUSE.INFORMATION_SCHEMA.COLUMNS where COLUMN_NAME='InvoiceNumber' AND TABLE_NAME='trnExportDocumentDeclarationLotDetails')
BEGIN
USE CFS_BONDED_WAREHOUSE
	 EXEC sp_rename 'dbo.trnExportDocumentDeclarationLotDetails.InvoiceNumber', 'BLNo', 'COLUMN';
END
GO
--------------------
IF EXISTS (select * from CFS_BONDED_WAREHOUSE.INFORMATION_SCHEMA.COLUMNS where COLUMN_NAME='InvoiceDate' AND TABLE_NAME='trnExportDocumentDeclarationLotDetails')
BEGIN
USE CFS_BONDED_WAREHOUSE
	 EXEC sp_rename 'dbo.trnExportDocumentDeclarationLotDetails.InvoiceDate', 'BLDate', 'COLUMN';
END
GO
--------------------
IF EXISTS (select * from CFS_BONDED_WAREHOUSE.INFORMATION_SCHEMA.COLUMNS where COLUMN_NAME='SpaceCertificateID' AND TABLE_NAME='trnExportDocumentDeclarationLotDetails')
BEGIN
USE CFS_BONDED_WAREHOUSE
	 EXEC sp_rename 'dbo.trnExportDocumentDeclarationLotDetails.SpaceCertificateID', 'trnDocumentID', 'COLUMN';
END
GO
----------------------
IF EXISTS (select * from CFS_BONDED_WAREHOUSE.INFORMATION_SCHEMA.COLUMNS where COLUMN_NAME='SpaceCertificateNO' AND TABLE_NAME='trnExportDocumentDeclarationLotDetails')
BEGIN
USE CFS_BONDED_WAREHOUSE
	 EXEC sp_rename 'dbo.trnExportDocumentDeclarationLotDetails.SpaceCertificateNO', 'trnDocumentNo', 'COLUMN';
END
GO

-----------------------------------------
IF  EXISTS(SELECT * FROM [CFS_BONDED_WAREHOUSE].Information_schema.Columns WHERE Table_name = 'trnExportDocumentDeclarationLotDetails' and Column_name = 'BatchID')
BEGIN
	ALTER TABLE [CFS_BONDED_WAREHOUSE].[dbo].trnExportDocumentDeclarationLotDetails drop column BatchID 
END
---------
IF EXISTS(SELECT * FROM [CFS_BONDED_WAREHOUSE].Information_schema.Columns WHERE Table_name = 'trnExportDocumentDeclarationLotDetails' and Column_name = 'BatchNo')
BEGIN
	ALTER TABLE [CFS_BONDED_WAREHOUSE].[dbo].trnExportDocumentDeclarationLotDetails drop column BatchNo 
END
-------
IF EXISTS(SELECT * FROM [CFS_BONDED_WAREHOUSE].Information_schema.Columns WHERE Table_name = 'trnExportDocumentDeclarationLotDetails' and Column_name = 'DecPkgs')
BEGIN
	ALTER TABLE [CFS_BONDED_WAREHOUSE].[dbo].trnExportDocumentDeclarationLotDetails drop column DecPkgs 
END
----------
IF EXISTS(SELECT * FROM [CFS_BONDED_WAREHOUSE].Information_schema.Columns WHERE Table_name = 'trnExportDocumentDeclarationLotDetails' and Column_name = 'DecPcs')
BEGIN
	ALTER TABLE [CFS_BONDED_WAREHOUSE].[dbo].trnExportDocumentDeclarationLotDetails drop column DecPcs 
END
-----------
IF EXISTS(SELECT * FROM [CFS_BONDED_WAREHOUSE].Information_schema.Columns WHERE Table_name = 'trnExportDocumentDeclarationLotDetails' and Column_name = 'DecWeight')
BEGIN
	ALTER TABLE [CFS_BONDED_WAREHOUSE].[dbo].trnExportDocumentDeclarationLotDetails drop column DecWeight 
END
-------
IF EXISTS(SELECT * FROM [CFS_BONDED_WAREHOUSE].Information_schema.Columns WHERE Table_name = 'trnExportDocumentDeclarationLotDetails' and Column_name = 'LOTNO')
BEGIN
	ALTER TABLE [CFS_BONDED_WAREHOUSE].[dbo].trnExportDocumentDeclarationLotDetails drop column LOTNO 
END

------------------------------------
IF  EXISTS(SELECT * FROM [CFS_BONDED_WAREHOUSE_History].Information_schema.Columns WHERE Table_name = 'trnExportDocumentDeclarationLotDetails_History' and Column_name = 'BatchID')
BEGIN
	ALTER TABLE [CFS_BONDED_WAREHOUSE_History].[dbo].trnExportDocumentDeclarationLotDetails_History drop column BatchID 
END
---------
IF EXISTS(SELECT * FROM [CFS_BONDED_WAREHOUSE_History].Information_schema.Columns WHERE Table_name = 'trnExportDocumentDeclarationLotDetails_History' and Column_name = 'BatchNo')
BEGIN
	ALTER TABLE [CFS_BONDED_WAREHOUSE_History].[dbo].trnExportDocumentDeclarationLotDetails_History drop column BatchNo 
END
-------
IF EXISTS(SELECT * FROM [CFS_BONDED_WAREHOUSE_History].Information_schema.Columns WHERE Table_name = 'trnExportDocumentDeclarationLotDetails_History' and Column_name = 'DecPkgs')
BEGIN
	ALTER TABLE [CFS_BONDED_WAREHOUSE_History].[dbo].trnExportDocumentDeclarationLotDetails_History drop column DecPkgs 
END
----------
IF EXISTS(SELECT * FROM [CFS_BONDED_WAREHOUSE_History].Information_schema.Columns WHERE Table_name = 'trnExportDocumentDeclarationLotDetails_History' and Column_name = 'DecPcs')
BEGIN
	ALTER TABLE [CFS_BONDED_WAREHOUSE_History].[dbo].trnExportDocumentDeclarationLotDetails_History drop column DecPcs 
END
-----------
IF EXISTS(SELECT * FROM [CFS_BONDED_WAREHOUSE_History].Information_schema.Columns WHERE Table_name = 'trnExportDocumentDeclarationLotDetails_History' and Column_name = 'DecWeight')
BEGIN
	ALTER TABLE [CFS_BONDED_WAREHOUSE_History].[dbo].trnExportDocumentDeclarationLotDetails_History drop column DecWeight 
END
-------
IF EXISTS(SELECT * FROM [CFS_BONDED_WAREHOUSE_History].Information_schema.Columns WHERE Table_name = 'trnExportDocumentDeclarationLotDetails_History' and Column_name = 'LOTNO')
BEGIN
	ALTER TABLE [CFS_BONDED_WAREHOUSE_History].[dbo].trnExportDocumentDeclarationLotDetails_History drop column LOTNO 
END
---------------------------------
IF NOT EXISTS(SELECT * FROM [CFS_BONDED_WAREHOUSE].Information_schema.Columns WHERE Table_name = 'trnExportDocumentDeclarationItems' and Column_name = 'trnExBondDocumentEntryDetailsID')
BEGIN
	ALTER TABLE [CFS_BONDED_WAREHOUSE].[dbo].trnExportDocumentDeclarationItems ADD trnExBondDocumentEntryDetailsID INT NULL
END
-----------------------------------------------
IF NOT EXISTS(SELECT * FROM [CFS_BONDED_WAREHOUSE_History].Information_schema.Columns WHERE Table_name = 'trnExportDocumentDeclarationItems_History' and Column_name = 'trnExBondDocumentEntryDetailsID')
BEGIN
	ALTER TABLE [CFS_BONDED_WAREHOUSE_History].[dbo].trnExportDocumentDeclarationItems_History ADD trnExBondDocumentEntryDetailsID INT NULL
END

-------------------------------------------------
IF NOT EXISTS (select * from CFS_BONDED_WAREHOUSE_History.INFORMATION_SCHEMA.COLUMNS where COLUMN_NAME='DocumentEXBOENo' AND TABLE_NAME='trnExportDocumentDeclarationLotDetails_history')
BEGIN
	 ALTER TABLE [CFS_BONDED_WAREHOUSE_History].[dbo].trnExportDocumentDeclarationLotDetails_history ADD DocumentEXBOENo varchar(255) NULL	 
END
GO
------------------------------------------------
IF NOT EXISTS (select * from CFS_BONDED_WAREHOUSE.INFORMATION_SCHEMA.COLUMNS where COLUMN_NAME='EXBOENo' AND TABLE_NAME='trnExportDocumentDeclarationLotDetails')
BEGIN
	 ALTER TABLE [CFS_BONDED_WAREHOUSE].[dbo].trnExportDocumentDeclarationLotDetails ADD EXBOENo varchar(255) NULL
END
GO
---------------------------------------------------------
IF NOT EXISTS (select * from CFS_BONDED_WAREHOUSE_History.INFORMATION_SCHEMA.COLUMNS where COLUMN_NAME='EXBOENo' AND TABLE_NAME='trnExportDocumentDeclarationLotDetails_history')
BEGIN
	 ALTER TABLE [CFS_BONDED_WAREHOUSE_History].[dbo].trnExportDocumentDeclarationLotDetails_history ADD EXBOENo varchar(255) NULL
END
GO
------------------------------
IF EXISTS (select * from CFS_BONDED_WAREHOUSE.INFORMATION_SCHEMA.COLUMNS where COLUMN_NAME='DocumentLotNO' AND TABLE_NAME='trnExportDocumentDeclarationLotDetails')
BEGIN
USE CFS_BONDED_WAREHOUSE
	 EXEC sp_rename 'dbo.trnExportDocumentDeclarationLotDetails.DocumentLotNO', 'DocumentEXBOENo', 'COLUMN';
END
GO

--------------------------------
IF NOT EXISTS (select * from CFS_BONDED_WAREHOUSE.INFORMATION_SCHEMA.COLUMNS where COLUMN_NAME='TransactionType' AND TABLE_NAME='trnExportDocumentDeclarationLotDetails')
BEGIN
	 ALTER TABLE [CFS_BONDED_WAREHOUSE].[dbo].trnExportDocumentDeclarationLotDetails ADD TransactionType varchar(255) NULL
END
GO
---------------------------------------------------------
IF NOT EXISTS (select * from CFS_BONDED_WAREHOUSE_History.INFORMATION_SCHEMA.COLUMNS where COLUMN_NAME='TransactionType' AND TABLE_NAME='trnExportDocumentDeclarationLotDetails_history')
BEGIN
	 ALTER TABLE [CFS_BONDED_WAREHOUSE_History].[dbo].trnExportDocumentDeclarationLotDetails_history ADD TransactionType varchar(255) NULL
END
GO
-----------------------------------------------------------
IF NOT EXISTS (select * from CFS_BONDED_WAREHOUSE.INFORMATION_SCHEMA.COLUMNS where COLUMN_NAME='trnExBondDocumentEntryDetailsID' AND TABLE_NAME='trnExportDocumentDeclarationLotDetails')
BEGIN
	 ALTER TABLE [CFS_BONDED_WAREHOUSE].[dbo].trnExportDocumentDeclarationLotDetails ADD trnExBondDocumentEntryDetailsID INT NULL
END
GO
----------------------------
IF NOT EXISTS (select * from CFS_BONDED_WAREHOUSE_History.INFORMATION_SCHEMA.COLUMNS where COLUMN_NAME='trnExBondDocumentEntryDetailsID' AND TABLE_NAME='trnExportDocumentDeclarationLotDetails_history')
BEGIN
	 ALTER TABLE [CFS_BONDED_WAREHOUSE_History].[dbo].trnExportDocumentDeclarationLotDetails_history ADD trnExBondDocumentEntryDetailsID INT NULL
END
GO

----------------------------------------------
--DHRUVI
--11/01/2023

IF EXISTS(SELECT * FROM [CFS_BONDED_WAREHOUSE].[admin].pagemenu WHERE Controller = 'trnEmptyContainerInWOGW' AND PageMenuID=135)
BEGIN
UPDATE [CFS_BONDED_WAREHOUSE].[Admin].PageMenu  SET Controller='trnEmptyContainerInWO' WHERE PageMenuID=135 and Controller = 'trnEmptyContainerInWOGW'
END
GO

------------------------------------------------------------
--Nisha
IF NOT EXISTS (select * from CFS_BONDED_WAREHOUSE.INFORMATION_SCHEMA.COLUMNS where COLUMN_NAME='DeleteReason' AND TABLE_NAME='trndocument')
BEGIN
	 ALTER TABLE [CFS_BONDED_WAREHOUSE].[dbo].trndocument ADD DeleteReason VARCHAR(255) NULL
END
GO
----------------------------
IF NOT EXISTS (select * from CFS_BONDED_WAREHOUSE_History.INFORMATION_SCHEMA.COLUMNS where COLUMN_NAME='DeleteReason' AND TABLE_NAME='trndocument_history')
BEGIN
	 ALTER TABLE [CFS_BONDED_WAREHOUSE_History].[dbo].trndocument_history ADD DeleteReason VARCHAR(255) NULL
END
GO

-------------------------------------------
--DHRUVI
--11/01/2023
IF EXISTS(SELECT * FROM [CFS_BONDED_WAREHOUSE].[admin].pagemenu WHERE Controller = 'trnEmptyContainerInWO' AND PageMenuID=82)
BEGIN
	UPDATE  Admin.PageMenu set FlagDeleted=1  where Controller='trnEmptyContainerInWO' and PageMenuID=82
END
GO
---------------------------------------------
IF EXISTS(SELECT * FROM [CFS_BONDED_WAREHOUSE].[admin].pagemenu WHERE Controller = 'trnEmptyContainerGateInGW' AND PageMenuID=131)
BEGIN
	UPDATE  Admin.PageMenu SET Controller='trnEmptyContainerGateIn'  WHERE Controller='trnEmptyContainerGateInGW' and PageMenuID=131
END
GO
-------
---Nisha:12/01/2024

IF NOT EXISTS (select * from CFS_BONDED_WAREHOUSE.INFORMATION_SCHEMA.COLUMNS where COLUMN_NAME='DeleteReason' AND TABLE_NAME='trndocument')
BEGIN
	 ALTER TABLE [CFS_BONDED_WAREHOUSE].[dbo].trndocument ADD DeleteReason VARCHAR(255) NULL
END
GO
----------------------------
IF NOT EXISTS (select * from CFS_BONDED_WAREHOUSE_History.INFORMATION_SCHEMA.COLUMNS where COLUMN_NAME='DeleteReason' AND TABLE_NAME='trndocument_history')
BEGIN
	 ALTER TABLE [CFS_BONDED_WAREHOUSE_History].[dbo].trndocument_history ADD DeleteReason VARCHAR(255) NULL
END
GO
GO
----------------------
IF NOT EXISTS (select * from CFS_BONDED_WAREHOUSE.INFORMATION_SCHEMA.COLUMNS where COLUMN_NAME='AreaRequired' AND TABLE_NAME='trnDocumentContainer')
BEGIN
	 ALTER TABLE [CFS_BONDED_WAREHOUSE].[dbo].trnDocumentContainer ADD AreaRequired decimal(18,2) NULL
END
GO
----------------------------
IF NOT EXISTS (select * from CFS_BONDED_WAREHOUSE_History.INFORMATION_SCHEMA.COLUMNS where COLUMN_NAME='AreaRequired' AND TABLE_NAME='trnDocumentContainer_history')
BEGIN
	 ALTER TABLE [CFS_BONDED_WAREHOUSE_History].[dbo].trnDocumentContainer_history ADD  AreaRequired decimal(18,2) NULL
END
GO
----------------------
IF NOT EXISTS (select * from CFS_BONDED_WAREHOUSE.INFORMATION_SCHEMA.COLUMNS where COLUMN_NAME='AdditionalArea' AND TABLE_NAME='trnDocumentContainer')
BEGIN
	 ALTER TABLE [CFS_BONDED_WAREHOUSE].[dbo].trnDocumentContainer ADD AdditionalArea decimal(18,2) NULL
END
GO
----------------------------
IF NOT EXISTS (select * from CFS_BONDED_WAREHOUSE_History.INFORMATION_SCHEMA.COLUMNS where COLUMN_NAME='AdditionalArea' AND TABLE_NAME='trnDocumentContainer_history')
BEGIN
	 ALTER TABLE [CFS_BONDED_WAREHOUSE_History].[dbo].trnDocumentContainer_history ADD  AdditionalArea decimal(18,2) NULL
END
GO
----------------------
IF NOT EXISTS (select * from CFS_BONDED_WAREHOUSE.INFORMATION_SCHEMA.COLUMNS where COLUMN_NAME='TotalArea' AND TABLE_NAME='trnDocumentContainer')
BEGIN
	 ALTER TABLE [CFS_BONDED_WAREHOUSE].[dbo].trnDocumentContainer ADD TotalArea decimal(18,2) NULL
END
GO
----------------------------
IF NOT EXISTS (select * from CFS_BONDED_WAREHOUSE_History.INFORMATION_SCHEMA.COLUMNS where COLUMN_NAME='TotalArea' AND TABLE_NAME='trnDocumentContainer_history')
BEGIN
	 ALTER TABLE [CFS_BONDED_WAREHOUSE_History].[dbo].trnDocumentContainer_history ADD  TotalArea decimal(18,2) NULL
END
GO
---------------------------------------------------------------
--DHRUVI
--12/01/2023

IF EXISTS(SELECT * FROM [CFS_BONDED_WAREHOUSE].[admin].pagemenu WHERE Controller = 'trnexportstufingwo' AND PageMenuID=159)
BEGIN
	UPDATE  Admin.PageMenu SET Controller='trnExportStufingWO'  WHERE Controller='trnexportstufingwo' and PageMenuID=159
END
GO
-----------
--nisha:16/01/2024
-----------------
IF EXISTS(SELECT * FROM [CFS_BONDED_WAREHOUSE].[admin].pagemenu WHERE Controller = 'trnExBondDocumentEntry' AND ParentID=148)
BEGIN
UPDATE [Admin].PageMenu  SET Controller='trnExBondDocumentEntryCO' WHERE ParentID=148 and Controller = 'trnExBondDocumentEntry'
END
GO
-----------------
IF EXISTS(SELECT * FROM [CFS_BONDED_WAREHOUSE].[admin].pagemenu WHERE Controller = 'trnExBondDocumentEntry' AND ParentID=152)
BEGIN
UPDATE [Admin].PageMenu  SET Controller='trnExBondDocumentEntryLCO' WHERE ParentID=152 and Controller = 'trnExBondDocumentEntry'
END
GO
------------------------------------------------------
IF EXISTS(SELECT * FROM [CFS_BONDED_WAREHOUSE].[admin].pagemenu WHERE Controller = 'trnExBondDocumentEntry' AND ParentID=157)
BEGIN
UPDATE [Admin].PageMenu  SET Controller='trnExBondDocumentEntryEXP' WHERE ParentID=157 and Controller = 'trnExBondDocumentEntry'
END
GO
------------------------------------------------------
--DHRUVI
--16/01/2024

IF EXISTS(SELECT * FROM [CFS_BONDED_WAREHOUSE].[admin].pagemenu WHERE Controller = 'trnexportclp' AND PageMenuID=160)
BEGIN
	UPDATE  Admin.PageMenu SET Controller='trnExportCLP'  WHERE Controller='trnexportclp' and PageMenuID=160
END
GO
------------------------------
IF EXISTS (select * from [CFS_BONDED_WAREHOUSE].INFORMATION_SCHEMA.COLUMNS where COLUMN_NAME like '%trnexportstufingwoContainerDetailsID%' and TABLE_NAME = 'trnExportCLP')
BEGIN
USE [CFS_BONDED_WAREHOUSE]
	 EXEC sp_rename 'dbo.trnExportCLP.trnexportstufingwoContainerDetailsID', 'trnExportStufingWOContainerDetailsID', 'COLUMN';
	 USE [CFS_BONDED_WAREHOUSE]
END
GO

-----------------------------------------------------------------------
--DHRUVI
--18/01/2024

IF EXISTS(SELECT * FROM [CFS_BONDED_WAREHOUSE].[admin].pagemenu WHERE Controller = 'trnexportmovementWO' AND PageMenuID=161)
BEGIN
	UPDATE [CFS_BONDED_WAREHOUSE].admin.Pagemenu SET Controller='trnExportMovementWO' WHERE PageMenuID=161 AND Controller='trnexportmovementWO'
END
GO

-----------------------------------
IF NOT EXISTS (SELECT * FROM [CFS_BONDED_WAREHOUSE].Information_schema.Columns where Table_name = 'trnEmptyTruckGateIn' and Column_name = 'WeighmentRequired')
BEGIN		
		ALTER TABLE [CFS_BONDED_WAREHOUSE].[dbo].trnEmptyTruckGateIn ADD WeighmentRequired BIT NOT NULL DEFAULT(0)
END
GO
----
IF NOT EXISTS (SELECT * FROM [CFS_BONDED_WAREHOUSE].Information_schema.Columns where Table_name = 'trnEmptyTruckGateIn' and Column_name = 'NonWeighmentReason')
BEGIN		
		ALTER TABLE [CFS_BONDED_WAREHOUSE].[dbo].trnEmptyTruckGateIn ADD NonWeighmentReason VARCHAR(255) NULL
END
GO
----
IF NOT EXISTS (SELECT * FROM [CFS_BONDED_WAREHOUSE_History].Information_schema.Columns where Table_name = 'trnEmptyTruckGateIn_History' and Column_name = 'WeighmentRequired')
BEGIN		
		ALTER TABLE [CFS_BONDED_WAREHOUSE_History].[dbo].trnEmptyTruckGateIn_History ADD WeighmentRequired BIT NOT NULL DEFAULT(0)
END
GO
----
IF NOT EXISTS (SELECT * FROM [CFS_BONDED_WAREHOUSE_History].Information_schema.Columns where Table_name = 'trnEmptyTruckGateIn_History' and Column_name = 'NonWeighmentReason')
BEGIN		
		ALTER TABLE [CFS_BONDED_WAREHOUSE_History].[dbo].trnEmptyTruckGateIn_History ADD NonWeighmentReason VARCHAR(255) NULL
END
GO
----
IF NOT EXISTS (SELECT * FROM [CFS_BONDED_WAREHOUSE].Information_schema.Columns where Table_name = 'trnWeighmentSlip' and Column_name = 'TruckType')
BEGIN		
		ALTER TABLE [CFS_BONDED_WAREHOUSE].[DBO].trnWeighmentSlip ADD TruckType VARCHAR(255)
END
GO
----
IF NOT EXISTS (SELECT * FROM [CFS_BONDED_WAREHOUSE_History].Information_schema.Columns where Table_name = 'trnWeighmentSlip_History' and Column_name = 'TruckType')
BEGIN		
		ALTER TABLE [CFS_BONDED_WAREHOUSE_History].[DBO].trnWeighmentSlip_History ADD TruckType VARCHAR(255)
END
GO

--------------------------------------------------------------------------------
--DHRUVI
--25/01/2024
IF EXISTS (select * from [CFS_BONDED_WAREHOUSE].INFORMATION_SCHEMA.COLUMNS where COLUMN_NAME like '%trnexportstufingwoGWContainerDetailsID%' and TABLE_NAME = 'trnReeferPluginOut')
BEGIN
USE [CFS_BONDED_WAREHOUSE]
	 EXEC sp_rename 'dbo.trnReeferPluginOut.trnexportstufingwoGWContainerDetailsID', 'trnexportstufingwoContainerDetailsID', 'COLUMN';
	 USE [CFS_BONDED_WAREHOUSE]
END
GO

----------------------------------------

IF EXISTS(SELECT * FROM [CFS_BONDED_WAREHOUSE].[admin].pagemenu WHERE Controller = 'trnLoadedContainerOutGPGW' AND ParentID=157 AND PageMenuID=164)
BEGIN
UPDATE [Admin].[PageMenu] SET Controller='trnLoadedContainerOutGPEP' WHERE ParentID=157 and Controller = 'trnLoadedContainerOutGPGW'  AND PageMenuID=164
END
GO
------------------------------------
--Nisha
--31/01/2024
IF NOT EXISTS(select * from [Admin].[GeneralSettings] where [StrKey] = 'PRTTF' and flagdeleted = 0)
BEGIN
	INSERT INTO [Admin].[GeneralSettings]
		([StrKey],[StrValue],[ModuleName],[Description],[Createdby],[CreatedDate])
		VALUES
		('PRTTF','PT','Prefix','Party Wise Tarrif No Prefix','1',[dbo].[GetCurrentDatetime]())
END
GO
IF NOT EXISTS (SELECT * FROM [CFS_BONDED_WAREHOUSE].Information_schema.Columns where Table_name = 'trnDocumentLotDetails' and Column_name = 'TariffHead')
BEGIN		
		ALTER TABLE [CFS_BONDED_WAREHOUSE].[DBO].trnDocumentLotDetails ADD TariffHead VARCHAR(255)
END
GO
----
IF NOT EXISTS (SELECT * FROM [CFS_BONDED_WAREHOUSE_History].Information_schema.Columns where Table_name = 'trnDocumentLotDetails_History' and Column_name = 'TariffHead')
BEGIN		
		ALTER TABLE [CFS_BONDED_WAREHOUSE_History].[DBO].trnDocumentLotDetails_History ADD TariffHead VARCHAR(255)
END
GO
IF not Exists(SELECT  * from  [CFS_BONDED_WAREHOUSE_History].[dbo].[History_Column] where [TableName] = 'trnDocumentLotDetails_History' and [LabelName] = 'TariffHead' )
Begin
	INSERT INTO [CFS_BONDED_WAREHOUSE_History].[dbo].[History_Column]([ColumnName],[LabelName],[TableName],[Flagdeleted],[CreatedDate])
	VALUES('##ALIAS##TariffHead', 'TariffHead','trnDocumentLotDetails_History', 0, GETDATE());
END
GO
----
--Nisha:08/02/2024
----
IF  EXISTS (SELECT * FROM [CFS_BONDED_WAREHOUSE].Information_schema.Columns where Table_name = 'trncargogatein' and Column_name = 'PhysicalSeal')
BEGIN		
		ALTER TABLE [CFS_BONDED_WAREHOUSE].[DBO].trncargogatein DROP COLUMN PhysicalSeal
END
GO
----
IF  EXISTS (SELECT * FROM [CFS_BONDED_WAREHOUSE].Information_schema.Columns where Table_name = 'trncargogatein' and Column_name = 'DeclaredSeal')
BEGIN		
		ALTER TABLE [CFS_BONDED_WAREHOUSE].[DBO].trncargogatein DROP COLUMN DeclaredSeal
END
GO
----
IF  EXISTS (SELECT * FROM [CFS_BONDED_WAREHOUSE_History].Information_schema.Columns where Table_name = 'trncargogatein_History' and Column_name = 'PhysicalSeal')
BEGIN		
		ALTER TABLE [CFS_BONDED_WAREHOUSE_History].[DBO].trncargogatein_History DROP COLUMN PhysicalSeal
END
GO
----
IF  EXISTS (SELECT * FROM [CFS_BONDED_WAREHOUSE_History].Information_schema.Columns where Table_name = 'trncargogatein_History' and Column_name = 'DeclaredSeal')
BEGIN		
		ALTER TABLE [CFS_BONDED_WAREHOUSE_history].[DBO].trncargogatein_History DROP COLUMN DeclaredSeal
END
GO
----
IF not EXISTS (SELECT * FROM [CFS_BONDED_WAREHOUSE].Information_schema.Columns where Table_name = 'trnCargoGateInContainerDetails' and Column_name = 'PhysicalSeal')
BEGIN		
		ALTER TABLE [CFS_BONDED_WAREHOUSE].[DBO].trnCargoGateInContainerDetails add  PhysicalSeal varchar(255)
END
GO
----
IF NOT EXISTS (SELECT * FROM [CFS_BONDED_WAREHOUSE].Information_schema.Columns where Table_name = 'trnCargoGateInContainerDetails' and Column_name = 'DeclaredSeal')
BEGIN		
		ALTER TABLE [CFS_BONDED_WAREHOUSE].[DBO].trnCargoGateInContainerDetails ADD DeclaredSeal Varchar(255)
END
GO
----
IF NOT EXISTS (SELECT * FROM [CFS_BONDED_WAREHOUSE_History].Information_schema.Columns where Table_name = 'trnCargoGateInContainerDetails_History' and Column_name = 'PhysicalSeal')
BEGIN		
		ALTER TABLE [CFS_BONDED_WAREHOUSE_History].[DBO].trnCargoGateInContainerDetails_History add PhysicalSeal Varchar(255)
END
GO
----
IF NOT  EXISTS (SELECT * FROM [CFS_BONDED_WAREHOUSE_History].Information_schema.Columns where Table_name = 'trnCargoGateInContainerDetails_History' and Column_name = 'DeclaredSeal')
BEGIN		
		ALTER TABLE [CFS_BONDED_WAREHOUSE_history].[DBO].trnCargoGateInContainerDetails_History add DeclaredSeal Varchar(255)
END
GO
----
IF not EXISTS (SELECT * FROM [CFS_BONDED_WAREHOUSE].Information_schema.Columns where Table_name = 'trnEmptyTruckGateInDomestic' and Column_name = 'PhysicalSeal')
BEGIN		
		ALTER TABLE [CFS_BONDED_WAREHOUSE].[DBO].trnEmptyTruckGateInDomestic add  PhysicalSeal varchar(255)
END
GO
----
IF NOT EXISTS (SELECT * FROM [CFS_BONDED_WAREHOUSE].Information_schema.Columns where Table_name = 'trnEmptyTruckGateInDomestic' and Column_name = 'DeclaredSeal')
BEGIN		
		ALTER TABLE [CFS_BONDED_WAREHOUSE].[DBO].trnEmptyTruckGateInDomestic ADD DeclaredSeal Varchar(255)
END
GO
----
IF NOT EXISTS (SELECT * FROM [CFS_BONDED_WAREHOUSE_History].Information_schema.Columns where Table_name = 'trnEmptyTruckGateInDomestic_History' and Column_name = 'PhysicalSeal')
BEGIN		
		ALTER TABLE [CFS_BONDED_WAREHOUSE_History].[DBO].trnEmptyTruckGateInDomestic_History add PhysicalSeal Varchar(255)
END
GO
----
IF NOT  EXISTS (SELECT * FROM [CFS_BONDED_WAREHOUSE_History].Information_schema.Columns where Table_name = 'trnEmptyTruckGateInDomestic_History' and Column_name = 'DeclaredSeal')
BEGIN		
		ALTER TABLE [CFS_BONDED_WAREHOUSE_history].[DBO].trnEmptyTruckGateInDomestic_History add DeclaredSeal Varchar(255)
END
GO

-- Nikul 14/02/2024

IF EXISTS(SELECT * FROM [CFS_BONDED_WAREHOUSE].[admin].pagemenu WHERE Controller = 'trnWeighmentSlipGW' AND ParentID=157)
BEGIN
UPDATE [Admin].[PageMenu] SET Controller='trnWeighmentSlipEP' WHERE ParentID=157 and Controller = 'trnWeighmentSlip' 
END
GO

----------------------------------------------------------------------------------------------------------------------
--Name : DHRUVI
--Date : 27/03/2024

IF NOT EXISTS(SELECT * FROM [CFS_BONDED_WAREHOUSE].Information_schema.Columns WHERE Table_name = 'trnCargoTruckOutwardCumGatepass' and Column_name='SearchTruckNo')
BEGIN
ALTER TABLE trnCargoTruckOutwardCumGatepass ADD SearchTruckNo VARCHAR(255)
END
GO

--NIKUL
--30/03/2024

If NOT Exists (SELECT * FROM [CFS_BONDED_WAREHOUSE].Information_schema.Columns WHERE TABLE_NAME = 'trnEmptyContainerOutWO' AND COLUMN_NAME = 'TransporterCode')
BEGIN
ALTER TABLE [CFS_BONDED_WAREHOUSE].[dbo].trnEmptyContainerOutWO ADD TransporterCode VARCHAR(255)
END
GO

If NOT Exists (SELECT * FROM [CFS_BONDED_WAREHOUSE].Information_schema.Columns WHERE TABLE_NAME = 'trnEmptyContainerOutWO' AND COLUMN_NAME = 'Consoler')
BEGIN
ALTER TABLE [CFS_BONDED_WAREHOUSE].[dbo].trnEmptyContainerOutWO ADD Consoler VARCHAR(255)
END
GO

If NOT Exists (SELECT * FROM [CFS_BONDED_WAREHOUSE].Information_schema.Columns WHERE TABLE_NAME = 'trnEmptyContainerOutWO' AND COLUMN_NAME = 'ConsolerID')
BEGIN
ALTER TABLE [CFS_BONDED_WAREHOUSE].[dbo].trnEmptyContainerOutWO ADD ConsolerID int
END
GO

If NOT Exists (SELECT * FROM [CFS_BONDED_WAREHOUSE].Information_schema.Columns WHERE TABLE_NAME = 'trnEmptyContainerOutWO' AND COLUMN_NAME = 'BooklingNo')
BEGIN
ALTER TABLE [CFS_BONDED_WAREHOUSE].[dbo].trnEmptyContainerOutWO ADD BooklingNo VARCHAR(255)
END
GO

If NOT Exists (SELECT * FROM [CFS_BONDED_WAREHOUSE].Information_schema.Columns WHERE TABLE_NAME = 'trnEmptyContainerOutWO' AND COLUMN_NAME = 'BookingDate')
BEGIN
ALTER TABLE [CFS_BONDED_WAREHOUSE].[dbo].trnEmptyContainerOutWO ADD BookingDate datetime
END
GO

If NOT Exists (SELECT * FROM [CFS_BONDED_WAREHOUSE].Information_schema.Columns WHERE TABLE_NAME = 'trnEmptyContainerOutWO' AND COLUMN_NAME = 'BillTo')
BEGIN
ALTER TABLE [CFS_BONDED_WAREHOUSE].[dbo].trnEmptyContainerOutWO ADD BillTo VARCHAR(255)
END
GO

If NOT Exists (SELECT * FROM [CFS_BONDED_WAREHOUSE].Information_schema.Columns WHERE TABLE_NAME = 'trnEmptyContainerOutWO' AND COLUMN_NAME = 'BillToID')
BEGIN
ALTER TABLE [CFS_BONDED_WAREHOUSE].[dbo].trnEmptyContainerOutWO ADD BillToID int
END
GO

If NOT Exists (SELECT * FROM [CFS_BONDED_WAREHOUSE].Information_schema.Columns WHERE TABLE_NAME = 'trnEmptyContainerOutWO' AND COLUMN_NAME = 'GateOutMode')
BEGIN
ALTER TABLE [CFS_BONDED_WAREHOUSE].[dbo].trnEmptyContainerOutWO ADD GateOutMode VARCHAR(255)
END
GO

If NOT Exists (SELECT * FROM [CFS_BONDED_WAREHOUSE].Information_schema.Columns WHERE TABLE_NAME = 'trnEmptyContainerOutWO' AND COLUMN_NAME = 'CodecoCode')
BEGIN
ALTER TABLE [CFS_BONDED_WAREHOUSE].[dbo].trnEmptyContainerOutWO ADD CodecoCode VARCHAR(255)
END
GO

If NOT Exists (SELECT * FROM [CFS_BONDED_WAREHOUSE].Information_schema.Columns WHERE TABLE_NAME = 'trnEmptyContainerOutWO' AND COLUMN_NAME = 'DoNo')
BEGIN
ALTER TABLE [CFS_BONDED_WAREHOUSE].[dbo].trnEmptyContainerOutWO ADD DoNo VARCHAR(255)
END
GO

If NOT Exists (SELECT * FROM [CFS_BONDED_WAREHOUSE].Information_schema.Columns WHERE TABLE_NAME = 'trnEmptyContainerOutWO' AND COLUMN_NAME = 'DoValidity')
BEGIN
ALTER TABLE [CFS_BONDED_WAREHOUSE].[dbo].trnEmptyContainerOutWO ADD DoValidity datetime
END
GO

If NOT Exists (SELECT * FROM [CFS_BONDED_WAREHOUSE].Information_schema.Columns WHERE TABLE_NAME = 'trnEmptyContainerOutWO' AND COLUMN_NAME = 'VCNNo')
BEGIN
ALTER TABLE [CFS_BONDED_WAREHOUSE].[dbo].trnEmptyContainerOutWO ADD VCNNo VARCHAR(255)
END
GO

If NOT Exists (SELECT * FROM [CFS_BONDED_WAREHOUSE].Information_schema.Columns WHERE TABLE_NAME = 'trnEmptyContainerOutWO' AND COLUMN_NAME = 'VCNNoID')
BEGIN
ALTER TABLE [CFS_BONDED_WAREHOUSE].[dbo].trnEmptyContainerOutWO ADD VCNNoID int
END
GO

If NOT Exists (SELECT * FROM [CFS_BONDED_WAREHOUSE].Information_schema.Columns WHERE TABLE_NAME = 'trnEmptyContainerOutWO' AND COLUMN_NAME = 'VesselName')
BEGIN
ALTER TABLE [CFS_BONDED_WAREHOUSE].[dbo].trnEmptyContainerOutWO ADD VesselName VARCHAR(255)
END
GO

If NOT Exists (SELECT * FROM [CFS_BONDED_WAREHOUSE].Information_schema.Columns WHERE TABLE_NAME = 'trnEmptyContainerOutWO' AND COLUMN_NAME = 'VoyNo')
BEGIN
ALTER TABLE [CFS_BONDED_WAREHOUSE].[dbo].trnEmptyContainerOutWO ADD VoyNo VARCHAR(255)
END
GO

If NOT Exists (SELECT * FROM [CFS_BONDED_WAREHOUSE].Information_schema.Columns WHERE TABLE_NAME = 'trnEmptyContainerOutWO' AND COLUMN_NAME = 'CutOffDate')
BEGIN
ALTER TABLE [CFS_BONDED_WAREHOUSE].[dbo].trnEmptyContainerOutWO ADD CutOffDate datetime
END
GO

----------------------------------------------------------------------------
update admin.pagemenu set controller='BWDefaultBillableHead' where controller='bwdefaultbilablehead' and PageMenuID=228



UPDATE ADMIN.GENERALSETTINGS SET Description='Bond - H & T Charges for Loaded Delivery Tariff Head For Container' WHERE GeneralSettingsID=1057
UPDATE ADMIN.GENERALSETTINGS SET Description='Bond - H & T charges for Destuff Delivery Tariff Head For Container' WHERE GeneralSettingsID=1058

---------------------------------------------------------
--DHRUVI
--10/04/2024

IF NOT EXISTS (select * from [CFS_BONDED_WAREHOUSE].[Admin].[GeneralSettings] where [StrKey] = 'BFC' and flagdeleted = 0)
BEGIN
		INSERT INTO [CFS_BONDED_WAREHOUSE].[Admin].[GeneralSettings]
		([StrKey],[StrValue],[ModuleName],[Description],[Createdby],[CreatedDate],[Flagdeleted],[IsActive])
		VALUES
		('BFC','59','TariffHead','Bond - Fuel Charges','1',[dbo].[GetCurrentDatetime](),0,1)
END
GO

--------------------
IF NOT EXISTS (select * from [CFS_BONDED_WAREHOUSE].[Admin].[GeneralSettings] where [StrKey] = 'BPEF' and flagdeleted = 0)
BEGIN
		INSERT INTO [CFS_BONDED_WAREHOUSE].[Admin].[GeneralSettings]
		([StrKey],[StrValue],[ModuleName],[Description],[Createdby],[CreatedDate],[Flagdeleted],[IsActive])
		VALUES
		('BPEF','60','TariffHead','Bond - Port Entry Fees','1',[dbo].[GetCurrentDatetime](),0,1)
END
GO

-----------------------------------------------------------
IF NOT EXISTS (select * from [CFS_BONDED_WAREHOUSE].[Admin].[GeneralSettings] where [StrKey] = 'BWC' and flagdeleted = 0)
BEGIN
		INSERT INTO [CFS_BONDED_WAREHOUSE].[Admin].[GeneralSettings]
		([StrKey],[StrValue],[ModuleName],[Description],[Createdby],[CreatedDate],[Flagdeleted],[IsActive])
		VALUES
		('BWC','61','TariffHead','Bond - Weighment Charges','1',[dbo].[GetCurrentDatetime](),0,1)
END
GO


-----------------------------------------------------------------------
IF NOT EXISTS (select * from [CFS_BONDED_WAREHOUSE].[Admin].[GeneralSettings] where [StrKey] = 'SIZ20' and flagdeleted = 0)
BEGIN
		INSERT INTO [CFS_BONDED_WAREHOUSE].[Admin].[GeneralSettings]
		([StrKey],[StrValue],[ModuleName],[Description],[Createdby],[CreatedDate],[Flagdeleted],[IsActive])
		VALUES
		('SIZ20','1','ContSize','CONT SIZE 20','1',[dbo].[GetCurrentDatetime](),0,1)
END
GO
-------------------------------------
IF NOT EXISTS (select * from [CFS_BONDED_WAREHOUSE].[Admin].[GeneralSettings] where [StrKey] = 'SIZ40' and flagdeleted = 0)
BEGIN
		INSERT INTO [CFS_BONDED_WAREHOUSE].[Admin].[GeneralSettings]
		([StrKey],[StrValue],[ModuleName],[Description],[Createdby],[CreatedDate],[Flagdeleted],[IsActive])
		VALUES
		('SIZ40','2','ContSize','CONT SIZE 40','1',[dbo].[GetCurrentDatetime](),0,1)
END
GO
---------------------------------
IF NOT EXISTS (select * from [CFS_BONDED_WAREHOUSE].[Admin].[GeneralSettings] where [StrKey] = 'SIZ45' and flagdeleted = 0)
BEGIN
		INSERT INTO [CFS_BONDED_WAREHOUSE].[Admin].[GeneralSettings]
		([StrKey],[StrValue],[ModuleName],[Description],[Createdby],[CreatedDate],[Flagdeleted],[IsActive])
		VALUES
		('SIZ45','2','ContSize','CONT SIZE 45','1',[dbo].[GetCurrentDatetime](),0,1)
END
GO
------------------------------------------------
IF NOT EXISTS (select * from [CFS_BONDED_WAREHOUSE].[Admin].[GeneralSettings] where [StrKey] = 'TRMCS' and flagdeleted = 0)
BEGIN
		INSERT INTO [CFS_BONDED_WAREHOUSE].[Admin].[GeneralSettings]
		([StrKey],[StrValue],[ModuleName],[Description],[Createdby],[CreatedDate],[Flagdeleted],[IsActive])
		VALUES
		('TRMCS','58','TariffHead','Map Container Space','1',[dbo].[GetCurrentDatetime](),0,1)
END
GO
----------------------------------------------------------------------------------
IF NOT EXISTS (select * from [CFS_BONDED_WAREHOUSE].[Admin].[GeneralSettings] where [StrKey] = 'TRNDO' and flagdeleted = 0)
BEGIN
		INSERT INTO [CFS_BONDED_WAREHOUSE].[Admin].[GeneralSettings]
		([StrKey],[StrValue],[ModuleName],[Description],[Createdby],[CreatedDate],[Flagdeleted],[IsActive])
		VALUES
		('TRNDO','NOC/##FINANCIALYEAR##/','Prefix','Document Entry','1',[dbo].[GetCurrentDatetime](),0,1)		
END
GO
------------------------------------------------------------------------------------------------------------
If NOT EXISTS (SELECT * FROM [CFS_BONDED_WAREHOUSE].Information_schema.Columns WHERE TABLE_NAME = 'BondInvoiceConsolidatorCharge' AND COLUMN_NAME = 'trnExportStufingWOContainerDetailsID')
BEGIN
ALTER TABLE BondInvoiceConsolidatorCharge ADD trnExportStufingWOContainerDetailsID INT NULL
END
GO

--NIKUL
--10/04/2024

IF  EXISTS (select * from [CFS_Local].[Admin].[Pagemenu] where Controller = 'trnpreproforma' and MenuName='WH Proforma Invoice' and FlagDeleted = 0)
BEGIN
UPDATE [Admin].[PageMenu] SET Controller = 'trnpreproforma' where Controller='trnpreproformagw' and PageMenuID = 126
END

-------------------------------------------------------------------------------------------------------------------------------
--DHRUVI
--15/04/2024
IF NOT EXISTS (SELECT * FROM [CFS_BONDED_WAREHOUSE].Information_schema.Columns WHERE TABLE_NAME = 'BondInvoiceConsolidatorCharge' AND COLUMN_NAME = 'trnEmptyContainerGateInDetailsID')
BEGIN
ALTER TABLE BondInvoiceConsolidatorCharge ADD trnEmptyContainerGateInDetailsID INT NULL
END
GO
--------------------
IF NOT EXISTS (SELECT * FROM [CFS_BONDED_WAREHOUSE].Information_schema.Columns WHERE TABLE_NAME = 'BondInvoiceConsolidatorCharge' AND COLUMN_NAME = 'trnEmptyContainerOutWODetailsID')
BEGIN
ALTER TABLE BondInvoiceConsolidatorCharge ADD trnEmptyContainerOutWODetailsID INT
END
GO

--NIKUL
--22/04/2024

IF NOT EXISTS (select * from [CFS_BONDED_WAREHOUSE].[Admin].[GeneralSettings] where [StrKey] = 'DF' and flagdeleted = 0)
BEGIN
		INSERT INTO [CFS_BONDED_WAREHOUSE].[Admin].[GeneralSettings]
		([StrKey],[StrValue],[ModuleName],[Description],[Createdby],[CreatedDate],[Flagdeleted],[IsActive])
		VALUES
		('DF','dd/MM/yyyy','DateFormat','DateFormat','1',[dbo].[GetCurrentDatetime](),0,1)
END
GO

--NIKUL
--26/04/2024

IF  EXISTS (select * from [CFS_BONDED_WAREHOUSE].[DBO].MstrTariffHead where MstrTariffHeadID = 26 AND Flagdeleted = 0)
BEGIN
	update [CFS_BONDED_WAREHOUSE].[DBO].MstrTariffHead set TariffHeadName = 'Bond - Empty lift Seabird charges' where MstrTariffHeadID = 26 
END
GO

IF  EXISTS (select * from [CFS_BONDED_WAREHOUSE].[DBO].MstrTariffHead where MstrTariffHeadID = 56 AND Flagdeleted = 0)
BEGIN
	update [CFS_BONDED_WAREHOUSE].[DBO].MstrTariffHead set TariffHeadName = 'Bond - Empty Lift Seabird charges - Export' where MstrTariffHeadID = 56 
END
GO

IF  EXISTS (select * from [CFS_BONDED_WAREHOUSE].[DBO].MstrTariffHead where MstrTariffHeadID = 53 AND Flagdeleted = 0)
BEGIN
	update [CFS_BONDED_WAREHOUSE].[DBO].MstrTariffHead set TariffHeadName = 'Bond - Return Empty Lift Seabird Charges - Export' where MstrTariffHeadID = 53 
END
GO

IF  EXISTS (select * from [CFS_BONDED_WAREHOUSE].[DBO].MstrTariffHead where MstrTariffHeadID = 27 AND Flagdeleted = 0)
BEGIN
	update [CFS_BONDED_WAREHOUSE].[DBO].MstrTariffHead set TariffHeadName = 'Bond - Empty lift Customer charges' where MstrTariffHeadID = 27 
END
GO

IF  EXISTS (select * from [CFS_BONDED_WAREHOUSE].[DBO].MstrTariffHead where MstrTariffHeadID = 53 AND Flagdeleted = 0)
BEGIN
	update [CFS_BONDED_WAREHOUSE].[DBO].MstrTariffHead set TariffHeadName = 'Bond - Empty Lift Customer charges - Export' where MstrTariffHeadID = 55 
END
GO

IF  EXISTS (select * from [CFS_BONDED_WAREHOUSE].[DBO].MstrTariffHead where MstrTariffHeadID = 53 AND Flagdeleted = 0)
BEGIN
	update [CFS_BONDED_WAREHOUSE].[DBO].MstrTariffHead set TariffHeadName = 'Bond - Return Empty Lift Customer Charges - Export' where MstrTariffHeadID = 52 
END
GO

IF  EXISTS (select * from [CFS_BONDED_WAREHOUSE].ADMIN.GENERALSETTINGS where GeneralSettingsID = 44 and StrKey = 'LOFTH' AND Flagdeleted = 0)
BEGIN
	update [CFS_BONDED_WAREHOUSE].ADMIN.GENERALSETTINGS set [Description] = 'Tariff Head For Lift Customer By in Empty Container Out Work Order' where GeneralSettingsID = 44 and StrKey = 'LOFTH'
END
GO

IF  EXISTS (select * from [CFS_BONDED_WAREHOUSE].ADMIN.GENERALSETTINGS where GeneralSettingsID = 1106 and StrKey = 'EELOF' AND Flagdeleted = 0)
BEGIN
	update [CFS_BONDED_WAREHOUSE].ADMIN.GENERALSETTINGS set [Description] = 'WH - Empty Lift Customer charges - Export' where GeneralSettingsID = 1106 and StrKey = 'EELOF'
END
GO

IF  EXISTS (select * from [CFS_BONDED_WAREHOUSE].ADMIN.GENERALSETTINGS where GeneralSettingsID = 1108 and StrKey = 'RELOF' AND Flagdeleted = 0)
BEGIN
	update [CFS_BONDED_WAREHOUSE].ADMIN.GENERALSETTINGS set [Description] = 'WH - Return Empty Lift Customer Charges - Export' where GeneralSettingsID = 1108 and StrKey = 'RELOF'
END
GO

IF  EXISTS (select * from [CFS_BONDED_WAREHOUSE].ADMIN.GENERALSETTINGS where GeneralSettingsID = 43 and StrKey = 'LONTH' AND Flagdeleted = 0)
BEGIN
	update [CFS_BONDED_WAREHOUSE].ADMIN.GENERALSETTINGS set [Description] = 'Tariff Head For Lift Seabird By in Empty Container Out Work Order' where GeneralSettingsID = 43 and StrKey = 'LONTH'
END
GO

IF  EXISTS (select * from [CFS_BONDED_WAREHOUSE].ADMIN.GENERALSETTINGS where GeneralSettingsID = 1107 and StrKey = 'EELOC' AND Flagdeleted = 0)
BEGIN
	update [CFS_BONDED_WAREHOUSE].ADMIN.GENERALSETTINGS set [Description] = 'WH - Empty Lift Seabird charges - Export' where GeneralSettingsID = 1107 and StrKey = 'EELOC'
END
GO

IF  EXISTS (select * from [CFS_BONDED_WAREHOUSE].ADMIN.GENERALSETTINGS where GeneralSettingsID = 1109 and StrKey = 'RELON' AND Flagdeleted = 0)
BEGIN
	update [CFS_BONDED_WAREHOUSE].ADMIN.GENERALSETTINGS set [Description] = 'WH - Return Empty Lift Seabird Charges - Export' where GeneralSettingsID = 1109 and StrKey = 'RELON'
END
GO
--------------------------------------------------
--DHRUVI
--22/04/2024
IF NOT EXISTS (SELECT * FROM [CFS_BONDED_WAREHOUSE].Information_schema.Columns WHERE TABLE_NAME = 'BondInvoiceConsolidatorCharge' AND COLUMN_NAME = 'trnTruckDestuffingID')
BEGIN
ALTER TABLE BondInvoiceConsolidatorCharge ADD trnTruckDestuffingID INT NULL
END
GO
---------------------
IF NOT EXISTS (SELECT * FROM [CFS_BONDED_WAREHOUSE].Information_schema.Columns WHERE TABLE_NAME = 'BondInvoiceConsolidatorCharge' AND COLUMN_NAME = 'trnContainerDestuffingID')
BEGIN
ALTER TABLE BondInvoiceConsolidatorCharge ADD trnContainerDestuffingID INT NULL
END
GO

-------------------------------
IF NOT EXISTS (SELECT * FROM [CFS_BONDED_WAREHOUSE].[Admin].[GeneralSettings] WHERE [StrKey] = 'BAASC' AND flagdeleted = 0)
BEGIN
		INSERT INTO [CFS_BONDED_WAREHOUSE].[Admin].[GeneralSettings]
		([StrKey],[StrValue],[ModuleName],[Description],[Createdby],[CreatedDate],[Flagdeleted],[IsActive])
		VALUES
		('BAASC','62','TariffHead','Bond - Add. Storage Charges','1',[dbo].[GetCurrentDatetime](),0,1)
END
GO
-----------------------------------------------------
IF NOT EXISTS (SELECT * FROM [CFS_BONDED_WAREHOUSE].[Admin].[GeneralSettings] WHERE [StrKey] = 'BIC' AND flagdeleted = 0)
BEGIN
		INSERT INTO [CFS_BONDED_WAREHOUSE].[Admin].[GeneralSettings]
		([StrKey],[StrValue],[ModuleName],[Description],[Createdby],[CreatedDate],[Flagdeleted],[IsActive])
		VALUES
		('BIC','59','TariffHead','Bond - Insurance Charges','1',[dbo].[GetCurrentDatetime](),0,1)
END
GO
-------------------------------
IF NOT EXISTS (SELECT * FROM [CFS_BONDED_WAREHOUSE].Information_schema.Columns WHERE TABLE_NAME = 'trnDocumentLotDetails' AND COLUMN_NAME = 'CalculatedAV')
BEGIN
		ALTER TABLE trnDocumentLotDetails ADD CalculatedAV DECIMAL (18,2)
END
GO
--------------------------------
IF NOT EXISTS (SELECT * FROM [CFS_BONDED_WAREHOUSE].Information_schema.Columns WHERE TABLE_NAME = 'trnDocumentLotDetails' AND COLUMN_NAME = 'CalculatedAV')
BEGIN
 ALTER TABLE trnDocumentLotDetails ADD CalculatedDV DECIMAL (18,2)
END
GO
---------------------------------
IF NOT EXISTS(SELECT * FROM [CFS_BONDED_WAREHOUSE].[Admin].[GeneralSettings] WHERE StrValue='19' AND  ModuleName='TariffHead' AND Flagdeleted = 0)
BEGIN
	UPDATE  [Admin].[GeneralSettings]  SET Description='Bond - Storage Charges' WHERE StrValue='19' AND ModuleName='TariffHead'
END
GO
------------------------------------------
IF NOT EXISTS(SELECT * FROM [CFS_BONDED_WAREHOUSE].[Admin].[GeneralSettings] WHERE [StrKey] = 'BHSC' AND flagdeleted = 0)
BEGIN
	UPDATE Admin.GeneralSettings SET STRKEY='BHSC' WHERE ModuleName='TariffHead' AND STRVALUE='19'
END 
GO
-------------------------------------------------------------------------------------------
IF NOT EXISTS (SELECT * FROM [CFS_BONDED_WAREHOUSE].[Admin].[GeneralSettings] WHERE [StrKey] = 'BLCWO' AND flagdeleted = 0)
BEGIN
		INSERT INTO [CFS_BONDED_WAREHOUSE].[Admin].[GeneralSettings]
		([StrKey],[StrValue],[ModuleName],[Description],[Createdby],[CreatedDate],[Flagdeleted],[IsActive])
		VALUES
		('BLCWO','63','TariffHead','Bond - Weighment Charges (Out)','1',[dbo].[GetCurrentDatetime](),0,1)
END
GO

-----------------------------------
--DHRUVI
--27/04/2024
ALTER TABLE [CFS_BONDED_WAREHOUSE].[dbo].BondInvoiceConsolidatorCharge ADD Packages DECIMAL(18,2)
----------------------------------------------------------
--DHRUVI
--30/04/2024

ALTER TABLE [CFS_BONDED_WAREHOUSE].[dbo].trnContainerDestuffWorkOrderDetails ALTER COLUMN CargoType VARCHAR(255)
ALTER TABLE [CFS_BONDED_WAREHOUSE].[dbo].trnContainerDestuffWorkOrderDetails ALTER COLUMN ContainerLevel VARCHAR(255)

----------------------------------------------------------------------------------------------------------------------
UPDATE [CFS_BONDED_WAREHOUSE].ADMIN.PAGEMENU SET Controller='trnEmptyTruckGateInlco' WHERE Controller='trnEmptyTruckGateInGWlco' AND PageMenuID=156
UPDATE [CFS_BONDED_WAREHOUSE].ADMIN.PAGEMENU SET Controller='trnWeighmentSlipLCO' WHERE Controller='trnWeighmentSlipGWLCO' AND PageMenuID=154
UPDATE [CFS_BONDED_WAREHOUSE].ADMIN.PAGEMENU SET Controller='trnLoadedContainerOutGPLCO' WHERE Controller='trnLoadedContainerOutGPGW' AND PageMenuID=155

------------------------------------------------------------------------------
--DHRUVI
--02/05/2024
IF NOT EXISTS (SELECT * FROM [CFS_BONDED_WAREHOUSE].[Admin].[GeneralSettings] WHERE [StrKey] = 'BESC' and flagdeleted = 0)
BEGIN
		INSERT INTO [CFS_BONDED_WAREHOUSE].[Admin].[GeneralSettings]
		([StrKey],[StrValue],[ModuleName],[Description],[Createdby],[CreatedDate],[Flagdeleted],[IsActive])
		VALUES
		('BESC','67','TariffHead','Bond - Empty Storage Charges','1',[dbo].[GetCurrentDatetime](),0,1)
END
GO
----------------------------------------------------------------------
--DHRUVI
--06/05/2024

IF NOT EXISTS (SELECT * FROM [CFS_BONDED_WAREHOUSE].[dbo].[MstrTariffHead] WHERE [TariffHeadName] = 'Bond - Empty Storage Charges' and flagdeleted = 0)
BEGIN
INSERT [CFS_BONDED_WAREHOUSE].[dbo].[MstrTariffHead] (
											[TariffHeadCode], [TariffHeadName],
											[NatureofHead], [TariffActivity],
											[TariffType], [SequenceCode], 
											[LastSequenceCode], [IsActive],
											[InActiveReason], [Flagdeleted], [Createdby],
											[CreatedDate], [UpdatedBy], [UpdatedDate], 
											[HSNSACCode], [MstrTaxGroupID], [UnitType], 
											[Cycle]) 
				VALUES (67, 'Bond - Empty Storage Charges', 'Receipt', 'Empty', 'Cargo Handling',
				67, NULL, 1, '', 0, 10076, CAST('2023-05-16T15:33:00.000' AS DateTime)
				, 10076, CAST('2024-04-06T12:03:00.000' AS DateTime), '996711', 0, 'Unit Based', 'Warehouse')
END
GO
----------------------------------------------------------------------
--DHRUVI
--07/05/2024
IF NOT EXISTS (SELECT * FROM [CFS_BONDED_WAREHOUSE].Information_schema.Columns WHERE TABLE_NAME = 'trnCargoTruckOutwardCumGatepassContainerDetails' AND COLUMN_NAME = 'PhysicalSeal')
BEGIN

ALTER TABLE [CFS_BONDED_WAREHOUSE].[dbo].trnCargoTruckOutwardCumGatepassContainerDetails ADD PhysicalSeal VARCHAR(255)
END
GO
--------------
IF NOT EXISTS (SELECT * FROM [CFS_BONDED_WAREHOUSE].Information_schema.Columns WHERE TABLE_NAME = 'trnCargoTruckOutwardCumGatepassContainerDetails' AND COLUMN_NAME = 'DeclaredSeal')
BEGIN
ALTER TABLE [CFS_BONDED_WAREHOUSE].[dbo].trnCargoTruckOutwardCumGatepassContainerDetails ADD DeclaredSeal VARCHAR(255)
END
GO

---------------------------------------------------------------------------------------------
--Nikul 
--13-05-2024

IF NOT EXISTS (SELECT * FROM [CFS_BONDED_WAREHOUSE].Information_schema.Columns WHERE TABLE_NAME = 'trnCargoGateIn' AND COLUMN_NAME = 'YearID')
BEGIN
ALTER TABLE [CFS_BONDED_WAREHOUSE].[dbo].trnCargoGateIn ADD YearID INT 
END
GO

IF NOT EXISTS (SELECT * FROM [CFS_BONDED_WAREHOUSE_History].Information_schema.Columns WHERE TABLE_NAME = 'trnCargoGateIn_History' AND COLUMN_NAME = 'YearID')
BEGIN
ALTER TABLE [CFS_BONDED_WAREHOUSE_History].[dbo].trnCargoGateIn_History ADD YearID INT 
END
GO



IF NOT EXISTS (SELECT * FROM [CFS_BONDED_WAREHOUSE].Information_schema.Columns WHERE TABLE_NAME = 'trnWeighmentSlip' AND COLUMN_NAME = 'YearID')
BEGIN
ALTER TABLE [CFS_BONDED_WAREHOUSE].[dbo].trnWeighmentSlip ADD YearID INT 
END
GO

IF NOT EXISTS (SELECT * FROM [CFS_BONDED_WAREHOUSE_History].Information_schema.Columns WHERE TABLE_NAME = 'trnWeighmentSlip_History' AND COLUMN_NAME = 'YearID')
BEGIN
ALTER TABLE [CFS_BONDED_WAREHOUSE_History].[dbo].trnWeighmentSlip_History ADD YearID INT 
END
GO

IF NOT EXISTS (SELECT * FROM [CFS_BONDED_WAREHOUSE].Information_schema.Columns WHERE TABLE_NAME = 'trnTruckDestuffing' AND COLUMN_NAME = 'YearID')
BEGIN
ALTER TABLE [CFS_BONDED_WAREHOUSE].[dbo].trnTruckDestuffing ADD YearID INT 
END
GO

IF NOT EXISTS (SELECT * FROM [CFS_BONDED_WAREHOUSE_History].Information_schema.Columns WHERE TABLE_NAME = 'trnTruckDestuffing_History' AND COLUMN_NAME = 'YearID')
BEGIN
ALTER TABLE [CFS_BONDED_WAREHOUSE_History].[dbo].trnTruckDestuffing_History ADD YearID INT 
END
GO

IF NOT EXISTS (SELECT * FROM [CFS_BONDED_WAREHOUSE].Information_schema.Columns WHERE TABLE_NAME = 'trnEmptyTruckOutWO' AND COLUMN_NAME = 'YearID')
BEGIN
ALTER TABLE [CFS_BONDED_WAREHOUSE].[dbo].trnEmptyTruckOutWO ADD YearID INT 
END
GO

IF NOT EXISTS (SELECT * FROM [CFS_BONDED_WAREHOUSE_History].Information_schema.Columns WHERE TABLE_NAME = 'trnEmptyTruckOutWO_History' AND COLUMN_NAME = 'YearID')
BEGIN
ALTER TABLE [CFS_BONDED_WAREHOUSE_History].[dbo].trnEmptyTruckOutWO_History ADD YearID INT 
END
GO

IF NOT EXISTS (SELECT * FROM [CFS_BONDED_WAREHOUSE].Information_schema.Columns WHERE TABLE_NAME = 'trnExBondDocumentEntry' AND COLUMN_NAME = 'YearID')
BEGIN
ALTER TABLE [CFS_BONDED_WAREHOUSE].[dbo].trnExBondDocumentEntry ADD YearID INT 
END
GO

IF NOT EXISTS (SELECT * FROM [CFS_BONDED_WAREHOUSE_History].Information_schema.Columns WHERE TABLE_NAME = 'trnExBondDocumentEntry_History' AND COLUMN_NAME = 'YearID')
BEGIN
ALTER TABLE [CFS_BONDED_WAREHOUSE_History].[dbo].trnExBondDocumentEntry_History ADD YearID INT 
END
GO

IF NOT EXISTS (SELECT * FROM [CFS_BONDED_WAREHOUSE].Information_schema.Columns WHERE TABLE_NAME = 'trnEmptyTruckGateIn' AND COLUMN_NAME = 'YearID')
BEGIN
ALTER TABLE [CFS_BONDED_WAREHOUSE].[dbo].trnEmptyTruckGateIn ADD YearID INT 
END
GO

IF NOT EXISTS (SELECT * FROM [CFS_BONDED_WAREHOUSE_History].Information_schema.Columns WHERE TABLE_NAME = 'trnEmptyTruckGateIn_History' AND COLUMN_NAME = 'YearID')
BEGIN
ALTER TABLE [CFS_BONDED_WAREHOUSE_History].[dbo].trnEmptyTruckGateIn_History ADD YearID INT 
END
GO

IF NOT EXISTS (SELECT * FROM [CFS_BONDED_WAREHOUSE].Information_schema.Columns WHERE TABLE_NAME = 'trnCargoTruckOutwardCumGatepass' AND COLUMN_NAME = 'YearID')
BEGIN
ALTER TABLE [CFS_BONDED_WAREHOUSE].[dbo].trnCargoTruckOutwardCumGatepass ADD YearID INT 
END
GO

IF NOT EXISTS (SELECT * FROM [CFS_BONDED_WAREHOUSE_History].Information_schema.Columns WHERE TABLE_NAME = 'trnCargoTruckOutwardCumGatepass_History' AND COLUMN_NAME = 'YearID')
BEGIN
ALTER TABLE [CFS_BONDED_WAREHOUSE_History].[dbo].trnCargoTruckOutwardCumGatepass_History ADD YearID INT 
END
GO


IF NOT EXISTS (SELECT * FROM [CFS_BONDED_WAREHOUSE].Information_schema.Columns WHERE TABLE_NAME = 'trnContainerGateIn' AND COLUMN_NAME = 'YearID')
BEGIN
ALTER TABLE [CFS_BONDED_WAREHOUSE].[dbo].trnContainerGateIn ADD YearID INT 
END
GO

IF NOT EXISTS (SELECT * FROM [CFS_BONDED_WAREHOUSE_History].Information_schema.Columns WHERE TABLE_NAME = 'trnContainerGateIn_History' AND COLUMN_NAME = 'YearID')
BEGIN
ALTER TABLE [CFS_BONDED_WAREHOUSE_History].[dbo].trnContainerGateIn_History ADD YearID INT 
END
GO


IF NOT EXISTS (SELECT * FROM [CFS_BONDED_WAREHOUSE].Information_schema.Columns WHERE TABLE_NAME = 'trnContainerDestuffWorkOrder' AND COLUMN_NAME = 'YearID')
BEGIN
ALTER TABLE [CFS_BONDED_WAREHOUSE].[dbo].trnContainerDestuffWorkOrder ADD YearID INT 
END
GO

IF NOT EXISTS (SELECT * FROM [CFS_BONDED_WAREHOUSE_History].Information_schema.Columns WHERE TABLE_NAME = 'trnContainerDestuffWorkOrder_History' AND COLUMN_NAME = 'YearID')
BEGIN
ALTER TABLE [CFS_BONDED_WAREHOUSE_History].[dbo].trnContainerDestuffWorkOrder_History ADD YearID INT 
END
GO


IF NOT EXISTS (SELECT * FROM [CFS_BONDED_WAREHOUSE].Information_schema.Columns WHERE TABLE_NAME = 'trnContainerDestuffing' AND COLUMN_NAME = 'YearID')
BEGIN
ALTER TABLE [CFS_BONDED_WAREHOUSE].[dbo].trnContainerDestuffing ADD YearID INT 
END
GO

IF NOT EXISTS (SELECT * FROM [CFS_BONDED_WAREHOUSE_History].Information_schema.Columns WHERE TABLE_NAME = 'trnContainerDestuffing_History' AND COLUMN_NAME = 'YearID')
BEGIN
ALTER TABLE [CFS_BONDED_WAREHOUSE_History].[dbo].trnContainerDestuffing_History ADD YearID INT 
END
GO


IF NOT EXISTS (SELECT * FROM [CFS_BONDED_WAREHOUSE].Information_schema.Columns WHERE TABLE_NAME = 'trnLoadedContainerOutGP' AND COLUMN_NAME = 'YearID')
BEGIN
ALTER TABLE [CFS_BONDED_WAREHOUSE].[dbo].trnLoadedContainerOutGP ADD YearID INT 
END
GO

IF NOT EXISTS (SELECT * FROM [CFS_BONDED_WAREHOUSE_History].Information_schema.Columns WHERE TABLE_NAME = 'trnLoadedContainerOutGP_History' AND COLUMN_NAME = 'YearID')
BEGIN
ALTER TABLE [CFS_BONDED_WAREHOUSE_History].[dbo].trnLoadedContainerOutGP_History ADD YearID INT 
END
GO
-------------------------------------------------
--DHRUVI
--10/05/2024

IF NOT EXISTS (SELECT * FROM [CFS_BONDED_WAREHOUSE].Information_schema.Columns WHERE TABLE_NAME = 'trnContainerDestuffWorkOrder' AND COLUMN_NAME = 'trnDocumentID')
BEGIN
	ALTER TABLE [CFS_BONDED_WAREHOUSE].[dbo].trnContainerDestuffWorkOrder  ADD trnDocumentID INT NULL
END
GO
---------------------------------
IF NOT EXISTS (SELECT * FROM [CFS_BONDED_WAREHOUSE].Information_schema.Columns WHERE TABLE_NAME = 'trnContainerDestuffWorkOrder' AND COLUMN_NAME = 'trnDocumentNo')
BEGIN
	ALTER TABLE [CFS_BONDED_WAREHOUSE].[dbo].trnContainerDestuffWorkOrder ADD trnDocumentNo VARCHAR(255) NULL
END
GO
--------------------------------
IF NOT EXISTS (SELECT * FROM [CFS_BONDED_WAREHOUSE].Information_schema.Columns WHERE TABLE_NAME = 'trnContainerDestuffWorkOrder' AND COLUMN_NAME = 'trnDocumentContainerID')
BEGIN
		ALTER TABLE [CFS_BONDED_WAREHOUSE].[dbo].trnContainerDestuffWorkOrderDetails ADD trnDocumentContainerID INT NULL
END
GO
----------------------------------
IF NOT EXISTS (SELECT * FROM [CFS_BONDED_WAREHOUSE].Information_schema.Columns WHERE TABLE_NAME = 'trnContainerDestuffWorkOrder' AND COLUMN_NAME = 'IsCancel')
BEGIN
	ALTER TABLE [CFS_BONDED_WAREHOUSE].[dbo].trnContainerDestuffWorkOrderDetails ADD IsCancel BIT DEFAULT(0)
END

--------------------------------------------------------------
--Nikul
--13-05-2024

IF NOT EXISTS (SELECT * FROM [CFS_BONDED_WAREHOUSE].Information_schema.Columns WHERE TABLE_NAME = 'trnDocumentLotDetails' AND COLUMN_NAME = 'SpaceCerificateIssuedTo')
BEGIN
	ALTER TABLE [CFS_BONDED_WAREHOUSE].[dbo].trnDocumentLotDetails ADD SpaceCerificateIssuedTo varchar(255)
END
GO

IF NOT EXISTS (SELECT * FROM [CFS_BONDED_WAREHOUSE].Information_schema.Columns WHERE TABLE_NAME = 'trnDocumentLotDetails' AND COLUMN_NAME = 'CustomDetails')
BEGIN
	ALTER TABLE [CFS_BONDED_WAREHOUSE].[dbo].trnDocumentLotDetails ADD CustomDetails varchar(255)
END
GO


----- Nikul     14-05-2024
---------------------------------------------------------------------
IF  EXISTS (select * from [CFS_BONDED_WAREHOUSE].[DBO].MstrTariffHead where MstrTariffHeadID = 26 AND Flagdeleted = 0)
BEGIN
	update [CFS_BONDED_WAREHOUSE].[DBO].MstrTariffHead set TariffHeadName = 'Bond - Empty lift On charges' where MstrTariffHeadID = 26 
END
GO

IF  EXISTS (select * from [CFS_BONDED_WAREHOUSE].[DBO].MstrTariffHead where MstrTariffHeadID = 56 AND Flagdeleted = 0)
BEGIN
	update [CFS_BONDED_WAREHOUSE].[DBO].MstrTariffHead set TariffHeadName = 'Bond - Empty Lift On charges - Export' where MstrTariffHeadID = 56 
END
GO

IF  EXISTS (select * from [CFS_BONDED_WAREHOUSE].[DBO].MstrTariffHead where MstrTariffHeadID = 53 AND Flagdeleted = 0)
BEGIN
	update [CFS_BONDED_WAREHOUSE].[DBO].MstrTariffHead set TariffHeadName = 'Bond - Return Empty Lift On Charges - Export' where MstrTariffHeadID = 53 
END
GO

IF  EXISTS (select * from [CFS_BONDED_WAREHOUSE].[DBO].MstrTariffHead where MstrTariffHeadID = 27 AND Flagdeleted = 0)
BEGIN
	update [CFS_BONDED_WAREHOUSE].[DBO].MstrTariffHead set TariffHeadName = 'Bond - Empty lift Off charges' where MstrTariffHeadID = 27 
END
GO

IF  EXISTS (select * from [CFS_BONDED_WAREHOUSE].[DBO].MstrTariffHead where MstrTariffHeadID = 53 AND Flagdeleted = 0)
BEGIN
	update [CFS_BONDED_WAREHOUSE].[DBO].MstrTariffHead set TariffHeadName = 'Bond - Empty Lift Off charges - Export' where MstrTariffHeadID = 55 
END
GO

IF  EXISTS (select * from [CFS_BONDED_WAREHOUSE].[DBO].MstrTariffHead where MstrTariffHeadID = 53 AND Flagdeleted = 0)
BEGIN
	update [CFS_BONDED_WAREHOUSE].[DBO].MstrTariffHead set TariffHeadName = 'Bond - Return Empty Lift Off Charges - Export' where MstrTariffHeadID = 52 
END
GO

IF  EXISTS (select * from [CFS_BONDED_WAREHOUSE].ADMIN.GENERALSETTINGS where GeneralSettingsID = 44 and StrKey = 'LOFTH' AND Flagdeleted = 0)
BEGIN
	update [CFS_BONDED_WAREHOUSE].ADMIN.GENERALSETTINGS set [Description] = 'Tariff Head For Lift Off By in Empty Container Out Work Order' where GeneralSettingsID = 44 and StrKey = 'LOFTH'
END
GO

IF  EXISTS (select * from [CFS_BONDED_WAREHOUSE].ADMIN.GENERALSETTINGS where GeneralSettingsID = 1106 and StrKey = 'EELOF' AND Flagdeleted = 0)
BEGIN
	update [CFS_BONDED_WAREHOUSE].ADMIN.GENERALSETTINGS set [Description] = 'WH - Empty Lift Off charges - Export' where GeneralSettingsID = 1106 and StrKey = 'EELOF'
END
GO

IF  EXISTS (select * from [CFS_BONDED_WAREHOUSE].ADMIN.GENERALSETTINGS where GeneralSettingsID = 1108 and StrKey = 'RELOF' AND Flagdeleted = 0)
BEGIN
	update [CFS_BONDED_WAREHOUSE].ADMIN.GENERALSETTINGS set [Description] = 'WH - Return Empty Lift Off Charges - Export' where GeneralSettingsID = 1108 and StrKey = 'RELOF'
END
GO

IF  EXISTS (select * from [CFS_BONDED_WAREHOUSE].ADMIN.GENERALSETTINGS where GeneralSettingsID = 43 and StrKey = 'LONTH' AND Flagdeleted = 0)
BEGIN
	update [CFS_BONDED_WAREHOUSE].ADMIN.GENERALSETTINGS set [Description] = 'Tariff Head For Lift On By in Empty Container Out Work Order' where GeneralSettingsID = 43 and StrKey = 'LONTH'
END
GO

IF  EXISTS (select * from [CFS_BONDED_WAREHOUSE].ADMIN.GENERALSETTINGS where GeneralSettingsID = 1107 and StrKey = 'EELOC' AND Flagdeleted = 0)
BEGIN
	update [CFS_BONDED_WAREHOUSE].ADMIN.GENERALSETTINGS set [Description] = 'WH - Empty Lift On charges - Export' where GeneralSettingsID = 1107 and StrKey = 'EELOC'
END
GO

IF  EXISTS (select * from [CFS_BONDED_WAREHOUSE].ADMIN.GENERALSETTINGS where GeneralSettingsID = 1109 and StrKey = 'RELON' AND Flagdeleted = 0)
BEGIN
	update [CFS_BONDED_WAREHOUSE].ADMIN.GENERALSETTINGS set [Description] = 'WH - Return Empty Lift On Charges - Export' where GeneralSettingsID = 1109 and StrKey = 'RELON'
END
GO
----------------------------------------------------------------------------------
--DHRUVI
--16/05/2024
USE [CFS_BONDED_WAREHOUSE]
GO
EXEC SP_RENAME '[CFS_BONDED_WAREHOUSE].[dbo].trnCargoSSRLotDetails.ShippingBillNo', 'BOENo', 'COLUMN' 
EXEC SP_RENAME '[CFS_BONDED_WAREHOUSE].[dbo].trnCargoSSRLotDetails.ShippingBillDate', 'BOEDate', 'COLUMN' 
EXEC SP_RENAME '[CFS_BONDED_WAREHOUSE].[dbo].trnCargoSSRLotDetails.BillInvNumber', 'BLNo', 'COLUMN' 
EXEC SP_RENAME '[CFS_BONDED_WAREHOUSE].[dbo].trnCargoSSRLotDetails.BillInvDate', 'BLDate', 'COLUMN'

USE [CFS_BONDED_WAREHOUSE_History]
GO

EXEC SP_RENAME '[CFS_BONDED_WAREHOUSE_History].[dbo].[trnCargoSSRLotDetails_history].ShippingBillNo', 'BOENo', 'COLUMN' 
EXEC SP_RENAME '[CFS_BONDED_WAREHOUSE_History].[dbo].[trnCargoSSRLotDetails_history].ShippingBillDate', 'BOEDate', 'COLUMN' 
EXEC SP_RENAME '[CFS_BONDED_WAREHOUSE_History].[dbo].[trnCargoSSRLotDetails_history].BillInvNumber', 'BLNo', 'COLUMN' 
EXEC SP_RENAME '[CFS_BONDED_WAREHOUSE_History].[dbo].[trnCargoSSRLotDetails_history].BillInvDate', 'BLDate', 'COLUMN' 

USE [CFS_BONDED_WAREHOUSE]
GO
----------------------------------------------------------
IF NOT EXISTS (SELECT * FROM [CFS_BONDED_WAREHOUSE].Information_schema.Columns WHERE TABLE_NAME = 'trnCargoSSRLotDetails' AND COLUMN_NAME = 'IGMNo')
BEGIN
	ALTER TABLE [CFS_BONDED_WAREHOUSE].[dbo].trnCargoSSRLotDetails ADD IGMNo VARCHAR(255)
END
GO
IF NOT EXISTS (SELECT * FROM [CFS_BONDED_WAREHOUSE_History].Information_schema.Columns WHERE TABLE_NAME = 'trnCargoSSRLotDetails_history' AND COLUMN_NAME = 'IGMNo')
BEGIN
	alter table [CFS_BONDED_WAREHOUSE_History].[dbo].[trnCargoSSRLotDetails_history] add IGMNo VARCHAR(255)
END 
GO
IF NOT EXISTS (SELECT * FROM [CFS_BONDED_WAREHOUSE].Information_schema.Columns WHERE TABLE_NAME = 'trnCargoSSR' AND COLUMN_NAME = 'CycleName')
BEGIN
alter table [CFS_BONDED_WAREHOUSE].[dbo].trnCargoSSR drop column CycleName
END
GO
IF NOT EXISTS (SELECT * FROM [CFS_BONDED_WAREHOUSE_].Information_schema.Columns WHERE TABLE_NAME = 'trnCargoSSR' AND COLUMN_NAME = 'CycleID')
BEGIN
alter table [CFS_BONDED_WAREHOUSE].[dbo].trnCargoSSR drop column CycleID
END 
GO

------------------------
--DHRUVI
--16/05/2024

update [CFS_BONDED_WAREHOUSE].admin.pagemenu set Controller='trnContainerSSR' ,MenuName='BOND Container SSR' where controller='trnContainerSSRGW' and PageMenuID=128
update [CFS_BONDED_WAREHOUSE].admin.pagemenu set MenuName='BOND Cargo SSR' where controller='trnCargoSSR' and PageMenuID=127

USE [CFS_BONDED_WAREHOUSE]
GO
EXEC SP_RENAME 'trnContainerSSRLotDetails.ContainerSSRCSID', 'ContainerSSRID', 'COLUMN'
EXEC SP_RENAME 'trnContainerSSRLotDetails.ShipingBillNo', 'BOENo', 'COLUMN'
EXEC SP_RENAME 'trnContainerSSRLotDetails.ShipingBillDate', 'BOEDate', 'COLUMN' 
EXEC SP_RENAME 'trnContainerSSRLotDetails.InvoiceNumber', 'BLNo', 'COLUMN' 
EXEC SP_RENAME 'trnContainerSSRLotDetails.InvoiceDate', 'BLDate', 'COLUMN' 
EXEC SP_RENAME 'trnContainerSSR.NOCDate', 'DOCDate', 'COLUMN'
ALTER TABLE trnContainerSSRLotDetails ADD IGMNo VARCHAR(255)
USE [CFS_BONDED_WAREHOUSE_History]
GO
EXEC SP_RENAME 'trnContainerSSRLotDetails_History.ShipingBillNo', 'BOENo', 'COLUMN'
EXEC SP_RENAME 'trnContainerSSRLotDetails_History.ShipingBillDate', 'BOEDate', 'COLUMN' 
EXEC SP_RENAME 'trnContainerSSRLotDetails_History.InvoiceNumber', 'BLNo', 'COLUMN' 
EXEC SP_RENAME 'trnContainerSSRLotDetails_History.InvoiceDate', 'BLDate', 'COLUMN' 
EXEC SP_RENAME 'trnContainerSSRLotDetails_History.ContainerSSRCSID', 'ContainerSSRID', 'COLUMN'
EXEC SP_RENAME 'trnContainerSSRDetails_History.ContainerSSRCSID','ContainerSSRID','COLUMN'
USE [CFS_BONDED_WAREHOUSE]
GO
--------------------------------------
IF NOT EXISTS (SELECT * FROM [CFS_BONDED_WAREHOUSE].Information_schema.Columns WHERE TABLE_NAME = 'trnContainerSSR' AND COLUMN_NAME = 'SPType')
BEGIN
alter table [CFS_BONDED_WAREHOUSE].[dbo].trnContainerSSR add SPType varchar(255)
END
GO
IF NOT EXISTS (SELECT * FROM [CFS_BONDED_WAREHOUSE].Information_schema.Columns WHERE TABLE_NAME = 'trnContainerSSRDetails' AND COLUMN_NAME = 'Amount')
BEGIN
ALTER TABLE [CFS_BONDED_WAREHOUSE].[dbo].trnContainerSSRDetails ADD  Amount		decimal(18,2)
END 
GO
IF NOT EXISTS (SELECT * FROM [CFS_BONDED_WAREHOUSE].Information_schema.Columns WHERE TABLE_NAME = 'trnContainerSSRDetails' AND COLUMN_NAME = 'GrossAmount')
BEGIN
ALTER TABLE [CFS_BONDED_WAREHOUSE].[dbo].trnContainerSSRDetails ADD  GrossAmount	decimal(18,2)
END
GO
IF NOT EXISTS (SELECT * FROM [CFS_BONDED_WAREHOUSE].Information_schema.Columns WHERE TABLE_NAME = 'trnContainerSSRDetails' AND COLUMN_NAME = 'GSTamt')
BEGIN
ALTER TABLE [CFS_BONDED_WAREHOUSE].[dbo].trnContainerSSRDetails ADD  GSTamt		decimal(18,2)
END 
GO

-------------------------------------------------------
--DHRUVI
--17/05/2024

IF NOT EXISTS (SELECT * FROM [CFS_BONDED_WAREHOUSE].Information_schema.Columns WHERE TABLE_NAME = 'MstrGeneralTariffNOCWiseDetails' AND COLUMN_NAME = 'InBOENO')
BEGIN
alter table MstrGeneralTariffNOCWiseDetails ADD InBOENO varchar(255)
END 
GO
IF NOT EXISTS (SELECT * FROM [CFS_BONDED_WAREHOUSE].Information_schema.Columns WHERE TABLE_NAME = 'MstrGeneralTariffNOCWiseDetails' AND COLUMN_NAME = 'trnDocumentLotDetailsID')
BEGIN
alter table MstrGeneralTariffNOCWiseDetails ADD trnDocumentLotDetailsID int
END
GO
IF NOT EXISTS (SELECT * FROM [CFS_BONDED_WAREHOUSE].Information_schema.Columns WHERE TABLE_NAME = 'BondInvoiceConsolidatorCharge' AND COLUMN_NAME = 'trnCargoSSRID')
BEGIN
ALTER TABLE BondInvoiceConsolidatorCharge ADD trnCargoSSRID INT
END
GO
IF NOT EXISTS (SELECT * FROM [CFS_BONDED_WAREHOUSE].Information_schema.Columns WHERE TABLE_NAME = 'BondInvoiceConsolidatorCharge' AND COLUMN_NAME = 'trnContainerSSRID')
BEGIN
ALTER TABLE BondInvoiceConsolidatorCharge ADD trnContainerSSRID INT
END
GO
---------------------------------------
USE [CFS_BONDED_WAREHOUSE]
GO
EXEC SP_RENAME 'trnContainerSSRDetails.SSRBiilableHead', 'SSRBillableHead', 'COLUMN' 
EXEC SP_RENAME 'trnContainerSSRDetails.SSRBiilableHeadID', 'SSRBillableHeadID', 'COLUMN' 
USE [CFS_BONDED_WAREHOUSE_History]
GO
EXEC SP_RENAME 'trnContainerSSRDetails_History.SSRBiilableHead', 'SSRBillableHead', 'COLUMN' 
EXEC SP_RENAME 'trnContainerSSRDetails_History.SSRBiilableHeadID', 'SSRBillableHeadID', 'COLUMN' 
USE [CFS_BONDED_WAREHOUSE]
GO

------------------------------------------------------------------
--Nikul
--22/05/2024 

IF EXISTS (SELECT * FROM [CFS_BONDED_WAREHOUSE].Information_schema.Columns WHERE TABLE_NAME = 'trnDocumentLotDetails' AND COLUMN_NAME = 'CPStatus' AND DATA_TYPE = 'bit')
BEGIN
	ALTER TABLE [CFS_BONDED_WAREHOUSE].[dbo].trnDocumentLotDetails ALTER COLUMN CPStatus int;
END
GO

IF NOT EXISTS (SELECT * FROM [CFS_BONDED_WAREHOUSE].Information_schema.Columns WHERE TABLE_NAME = 'trnDocumentLotDetails' AND COLUMN_NAME = 'GateInDate')
BEGIN
ALTER TABLE [CFS_BONDED_WAREHOUSE].[dbo].trnDocumentLotDetails ADD GateInDate datetime
END
GO
------------------------
IF NOT EXISTS (select * from [Admin].[GeneralSettings] where [StrKey] = 'BNDCB' and flagdeleted = 0)
BEGIN
		INSERT INTO [Admin].[GeneralSettings]
		([StrKey],[StrValue],[ModuleName],[Description],[Createdby],[CreatedDate],[flagdeleted],IsActive)
		VALUES
		('BNDCB','BNDCBI##FINANCIALYEAR##','Prefix','Bond Invoice','1',[dbo].[GetCurrentDatetime](),0,1)
END
GO

--------------------------------
ALTER TABLE trnCargoSSR DROP COLUMN trnDocumentLotDetailsID
------------------------------------------------------------------
-- DHRUVI
-- DATE :31/05/2024
IF NOT EXISTS (SELECT * FROM [CFS_BONDED_WAREHOUSE].Information_schema.Columns WHERE TABLE_NAME = 'BondInvoice' AND COLUMN_NAME = 'TotalReleasedArea')
BEGIN
ALTER TABLE [CFS_BONDED_WAREHOUSE].[dbo].BondInvoice ADD TotalReleasedArea DECIMAL(18,2)
END
GO
IF NOT EXISTS (SELECT * FROM [CFS_BONDED_WAREHOUSE].Information_schema.Columns WHERE TABLE_NAME = 'BondInvoice' AND COLUMN_NAME = 'BalanceArea')
BEGIN
ALTER TABLE [CFS_BONDED_WAREHOUSE].[dbo].BondInvoice ADD BalanceArea DECIMAL(18,2)
END
GO
IF NOT EXISTS (SELECT * FROM [CFS_BONDED_WAREHOUSE].Information_schema.Columns WHERE TABLE_NAME = 'BondInvoiceDocumentDetails' AND COLUMN_NAME = 'BondNo')
BEGIN
ALTER TABLE [CFS_BONDED_WAREHOUSE].[dbo].BondInvoiceDocumentDetails ADD BondNo VARCHAR(255)
END
GO
IF NOT EXISTS (SELECT * FROM [CFS_BONDED_WAREHOUSE].Information_schema.Columns WHERE TABLE_NAME = 'BondInvoiceDocumentDetails' AND COLUMN_NAME = 'BondDate')
BEGIN
ALTER TABLE [CFS_BONDED_WAREHOUSE].[dbo].BondInvoiceDocumentDetails ADD BondDate DATETIME
END
GO
IF NOT EXISTS (SELECT * FROM [CFS_BONDED_WAREHOUSE].Information_schema.Columns WHERE TABLE_NAME = 'BondInvoiceDocumentDetails' AND COLUMN_NAME = 'CPNo')
BEGIN
ALTER TABLE [CFS_BONDED_WAREHOUSE].[dbo].BondInvoiceDocumentDetails ADD CPNo VARCHAR(255)
END
GO
IF NOT EXISTS (SELECT * FROM [CFS_BONDED_WAREHOUSE].Information_schema.Columns WHERE TABLE_NAME = 'BondInvoiceDocumentDetails' AND COLUMN_NAME = 'CPDate')
BEGIN
ALTER TABLE [CFS_BONDED_WAREHOUSE].[dbo].BondInvoiceDocumentDetails ADD CPDate DATETIME
END
GO
IF NOT EXISTS (SELECT * FROM [CFS_BONDED_WAREHOUSE].Information_schema.Columns WHERE TABLE_NAME = 'BondInvoiceDocumentDetails' AND COLUMN_NAME = 'BLNo')
BEGIN
ALTER TABLE [CFS_BONDED_WAREHOUSE].[dbo].BondInvoiceDocumentDetails ADD BLNo VARCHAR(255)
END
GO
IF NOT EXISTS (SELECT * FROM [CFS_BONDED_WAREHOUSE].Information_schema.Columns WHERE TABLE_NAME = 'BondInvoiceDocumentDetails' AND COLUMN_NAME = 'BLDate')
BEGIN
ALTER TABLE [CFS_BONDED_WAREHOUSE].[dbo].BondInvoiceDocumentDetails ADD BLDate DATETIME
END
GO
IF NOT EXISTS (SELECT * FROM [CFS_BONDED_WAREHOUSE].Information_schema.Columns WHERE TABLE_NAME = 'BondInvoiceDocumentDetails' AND COLUMN_NAME = 'HoldStatus')
BEGIN
ALTER TABLE [CFS_BONDED_WAREHOUSE].[dbo].BondInvoiceDocumentDetails ADD HoldStatus VARCHAR(255)
END
GO
IF NOT EXISTS (SELECT * FROM [CFS_BONDED_WAREHOUSE].Information_schema.Columns WHERE TABLE_NAME = 'BondInvoiceDocumentDetails' AND COLUMN_NAME = 'AssessableValue')
BEGIN
ALTER TABLE [CFS_BONDED_WAREHOUSE].[dbo].BondInvoiceDocumentDetails ADD AssessableValue DECIMAL(20,2)
END
GO
IF NOT EXISTS (SELECT * FROM [CFS_BONDED_WAREHOUSE].Information_schema.Columns WHERE TABLE_NAME = 'BondInvoiceDocumentDetails' AND COLUMN_NAME = 'EnhanceAssembleValue')
BEGIN
ALTER TABLE [CFS_BONDED_WAREHOUSE].[dbo].BondInvoiceDocumentDetails ADD EnhanceAssembleValue DECIMAL(20,2)
END
GO
IF NOT EXISTS (SELECT * FROM [CFS_BONDED_WAREHOUSE].Information_schema.Columns WHERE TABLE_NAME = 'BondInvoiceDocumentDetails' AND COLUMN_NAME = 'Dutyvalue')
BEGIN
ALTER TABLE [CFS_BONDED_WAREHOUSE].[dbo].BondInvoiceDocumentDetails ADD Dutyvalue DECIMAL(20,2)
END
GO
IF NOT EXISTS (SELECT * FROM [CFS_BONDED_WAREHOUSE].Information_schema.Columns WHERE TABLE_NAME = 'BondInvoiceDocumentDetails' AND COLUMN_NAME = 'EnhanceDutyvalue')
BEGIN
ALTER TABLE [CFS_BONDED_WAREHOUSE].[dbo].BondInvoiceDocumentDetails ADD EnhanceDutyvalue DECIMAL(20,2)
END
GO
IF NOT EXISTS (SELECT * FROM [CFS_BONDED_WAREHOUSE].Information_schema.Columns WHERE TABLE_NAME = 'BondInvoiceDocumentDetails' AND COLUMN_NAME = 'Importer')
BEGIN
ALTER TABLE [CFS_BONDED_WAREHOUSE].[dbo].BondInvoiceDocumentDetails ADD Importer VARCHAR(255)
END
GO




------------------------------------------------------------------
--Nikul
--24/05/2024 

IF NOT EXISTS (SELECT * FROM [CFS_BONDED_WAREHOUSE].Information_schema.Columns WHERE TABLE_NAME = 'trnCargoSSR' AND COLUMN_NAME = 'InBOENo')
BEGIN
ALTER TABLE [CFS_BONDED_WAREHOUSE].[dbo].trnCargoSSR ADD InBOENo varchar(255)
END
GO

IF NOT EXISTS (SELECT * FROM [CFS_BONDED_WAREHOUSE].Information_schema.Columns WHERE TABLE_NAME = 'trnCargoSSR' AND COLUMN_NAME = 'trnDocumentLotDetailsID')
BEGIN
ALTER TABLE [CFS_BONDED_WAREHOUSE].[dbo].trnCargoSSR ADD trnDocumentLotDetailsID int
END
GO

IF NOT EXISTS (SELECT * FROM [CFS_BONDED_WAREHOUSE].Information_schema.Columns WHERE TABLE_NAME = 'trnCargoSSR' AND COLUMN_NAME = 'InBOEDate')
BEGIN
ALTER TABLE [CFS_BONDED_WAREHOUSE].[dbo].trnCargoSSR ADD InBOEDate datetime
END
GO

IF NOT EXISTS (SELECT * FROM [CFS_BONDED_WAREHOUSE].Information_schema.Columns WHERE TABLE_NAME = 'trnCargoSSR' AND COLUMN_NAME = 'Cycle')
BEGIN
ALTER TABLE [CFS_BONDED_WAREHOUSE].[dbo].trnCargoSSR ADD Cycle varchar(255)
END
GO

IF NOT EXISTS (SELECT * FROM [CFS_BONDED_WAREHOUSE].Information_schema.Columns WHERE TABLE_NAME = 'trnCargoSSR' AND COLUMN_NAME = 'SBInvoiceNo')
BEGIN
ALTER TABLE [CFS_BONDED_WAREHOUSE].[dbo].trnCargoSSR ADD SBInvoiceNo varchar(255)
END
GO

IF NOT EXISTS (SELECT * FROM [CFS_BONDED_WAREHOUSE].Information_schema.Columns WHERE TABLE_NAME = 'trnCargoSSR' AND COLUMN_NAME = 'trnExportDocumentDeclarationLotDetailsID')
BEGIN
ALTER TABLE [CFS_BONDED_WAREHOUSE].[dbo].trnCargoSSR ADD trnExportDocumentDeclarationLotDetailsID int
END
GO

----------------------------------------------------

IF NOT EXISTS (SELECT * FROM [CFS_BONDED_WAREHOUSE].Information_schema.Columns WHERE TABLE_NAME = 'trnContainerSSR' AND COLUMN_NAME = 'InBOENo')
BEGIN
ALTER TABLE [CFS_BONDED_WAREHOUSE].[dbo].trnContainerSSR ADD InBOENo varchar(255)
END
GO

IF NOT EXISTS (SELECT * FROM [CFS_BONDED_WAREHOUSE].Information_schema.Columns WHERE TABLE_NAME = 'trnContainerSSR' AND COLUMN_NAME = 'trnDocumentLotDetailsID')
BEGIN
ALTER TABLE [CFS_BONDED_WAREHOUSE].[dbo].trnContainerSSR ADD trnDocumentLotDetailsID int
END
GO

IF NOT EXISTS (SELECT * FROM [CFS_BONDED_WAREHOUSE].Information_schema.Columns WHERE TABLE_NAME = 'trnContainerSSR' AND COLUMN_NAME = 'SBInvoiceNo')
BEGIN
ALTER TABLE [CFS_BONDED_WAREHOUSE].[dbo].trnContainerSSR ADD SBInvoiceNo varchar(255)
END
GO

IF NOT EXISTS (SELECT * FROM [CFS_BONDED_WAREHOUSE].Information_schema.Columns WHERE TABLE_NAME = 'trnContainerSSR' AND COLUMN_NAME = 'trnExportDocumentDeclarationLotDetailsID')
BEGIN
ALTER TABLE [CFS_BONDED_WAREHOUSE].[dbo].trnContainerSSR ADD trnExportDocumentDeclarationLotDetailsID int
END
GO

IF NOT EXISTS (SELECT * FROM [CFS_BONDED_WAREHOUSE].Information_schema.Columns WHERE TABLE_NAME = 'trnContainerSSR' AND COLUMN_NAME = 'Cycle')
BEGIN
ALTER TABLE [CFS_BONDED_WAREHOUSE].[dbo].trnContainerSSR ADD Cycle varchar(255)
END
GO

IF  EXISTS (select * from [CFS_BONDED_WAREHOUSE].[DBO].MstrTariffHead where MstrTariffHeadID = 36 AND Flagdeleted = 1)
BEGIN
	update [CFS_BONDED_WAREHOUSE].[DBO].MstrTariffHead set TariffHeadName = 'Bond - Container Weighment Charges', Flagdeleted = 0  where MstrTariffHeadID = 36
END
GO
-----------------------------------------------------------------------------------
--DHRUVI
--06/03/2024
IF NOT EXISTS (SELECT * FROM [PREBONDED].Information_schema.Columns WHERE TABLE_NAME = 'MstrGeneralTariffNOCWiseDetails' AND COLUMN_NAME = 'IsInBOEGroup')
BEGIN
ALTER TABLE [PREBONDED].[dbo].MstrGeneralTariffNOCWiseDetails  ADD IsInBOEGroup BIT DEFAULT(0)
END
GO

------------------------------------------------------------
UPDATE [PREBONDED].[dbo].MstrGeneralTariffNOCWiseEffetiveDate SET flagdeleted=1 WHERE MstrGeneralTariffNOCWiseEffetiveDateID=3


--Nikul
--08-06-2024

IF NOT EXISTS (SELECT * FROM [PREBONDED].Information_schema.Columns WHERE TABLE_NAME = 'trnExBondDocumentEntryDetails' AND COLUMN_NAME = 'ExBondCharge')
BEGIN
ALTER TABLE [PREBONDED].[dbo].trnExBondDocumentEntryDetails ADD ExBondCharge bit 
END
GO


IF NOT EXISTS (SELECT * FROM [PREBONDED].Admin.GeneralSettings WHERE StrKey = 'BEBC' AND ModuleName = 'TariffHead')
BEGIN
insert into Admin.GeneralSettings (StrKey,StrValue,ModuleName,Description,Flagdeleted,IsActive,Createdby,CreatedDate)
											values ('BEBC', 68, 'TariffHead', 'Bond - Exbond Charges',0 , 1, 1, dbo.GetCurrentDateTime())						
END
GO											

-------------------------------------------------------------------------------------------------------------------------

--Nikul
--08-06-2024
IF EXISTS (select * from [PREBONDED].Admin.pagemenu where MenuName = 'WH Storage Invoice'  and PageMenuID = 130)
BEGIN
	update [PREBONDED].admin.pagemenu set FlagDeleted = 1, IsActive = 0 where MenuName = 'WH Storage Invoice'  and PageMenuID = 130
END
GO

IF NOT EXISTS (SELECT * FROM [PREBONDED].Admin.GeneralSettings WHERE StrKey = 'PREP' AND ModuleName = 'Prefix' and flagdeleted = 0)
BEGIN
insert into Admin.GeneralSettings (StrKey,StrValue,ModuleName,Description,Flagdeleted,IsActive,Createdby,CreatedDate)
											values ('PREP', 'PREPI##FINANCIALYEAR##', 'Prefix', 'PreProfoma Invoice',0 , 1, 1, dbo.GetCurrentDateTime())
END
GO

---------------------------------------------------------------------------
--DHRUVI
--14/06/2024
IF NOT EXISTS (select * from [PREBONDED].[Admin].[GeneralSettings] where [StrKey] = 'DFWT' and flagdeleted = 0)
BEGIN
		INSERT INTO [PREBONDED].[Admin].[GeneralSettings]
		([StrKey],[StrValue],[ModuleName],[Description],[Createdby],[CreatedDate],[Flagdeleted],[IsActive])
		VALUES
		('DFWT','dd/MM/yyyy HH:mm','DateTimeFormat','DateTimeFormat','1',[dbo].[GetCurrentDatetime](),0,1)
END
GO

---------------------
IF NOT EXISTS (SELECT * FROM [PREBONDED].Information_schema.Columns WHERE TABLE_NAME = 'BondInvoice' AND COLUMN_NAME = 'StorageStartDate')
BEGIN
ALTER TABLE [PREBONDED].[dbo].BondInvoice ADD StorageStartDate DATETIME NULL
END
GO
---------------------------------------
DISABLE TRIGGER dbo.[TGR_BondInvoice] ON dbo.[BondInvoice]
GO
update bi set bi.StorageStartDate=(case  when isnull(bi.LastNOCValidUpto,'')='' then  bi.NOCDate else (bi.LastNOCValidUpto+1) end)
from
BondInvoice bi  
where Flagdeleted=0 and IsFinished=1
and isnull(StorageStartDate,'')=''
GO
ENABLE TRIGGER dbo.[TGR_BondInvoice]  ON dbo.[BondInvoice]
GO

---------------------------
--DHRUVI
--17/06/2024
ALTER TABLE dbo.BondInvoice
ADD CONSTRAINT DF_BondInvoice_TotalReleasedArea DEFAULT 0 FOR TotalReleasedArea

ALTER TABLE dbo.BondInvoice
ADD CONSTRAINT DF_BondInvoice_BalanceArea DEFAULT 0 FOR BalanceArea
----------------------------------------------------------------
DISABLE TRIGGER dbo.[TGR_BondInvoice] ON dbo.[BondInvoice]
GO
UPDATE BondInvoice SET TotalReleasedArea=0 WHERE ISNULL(TotalReleasedArea,0)=0
GO
UPDATE BondInvoice SET BalanceArea=0 WHERE ISNULL(BalanceArea,0)=0
GO
ENABLE TRIGGER dbo.[TGR_BondInvoice]  ON dbo.[BondInvoice]
GO

------------------------------------------------

UPDATE Admin.PageMenu SET Action='ExBondReport' WHERE Action='EXBOND' AND PageMenuID=245

----------------------------------
--Name :- DHRUVI
--Date :- 20/06/2024

IF NOT EXISTS(SELECT * FROM PREBONDED.information_schema.columns WHERE table_name = 'trnExportCLP' and COLUMN_name = 'WeighmentRequired')
BEGIN
	ALTER TABLE [PREBONDED].[dbo].trnExportCLP ADD WeighmentRequired varchar(3) 	
END 
GO
----------------------------------------
--DHRUVI
--25/06/2024
UPDATE [PREBONDED].[Admin].PageMenu SET Action='EmptyTruckPendencyForEmptyContainerOutReport',MenuName='Empty Truck Pendency For Empty Container Out Report'
WHERE Action='EmptyTruckPendancyForEmptyContainerOut' AND PageMenuID=187
------------------------------------------------------
--DHRUVI
--28/06/2024
UPDATE Admin.PageMenu SET Action='WHCargoOutwardReport',MenuName='WH Cargo Outward Report' WHERE Action='WHcargoOUTWARDreport' AND PageMenuID=211

-------------------------------
--DHRUVI
--11/07/2024
alter table [dbo].[CreditNote] add YearID int null

-- Nikul
--08-07-2024

IF EXISTS (select * from [PREBONDED].Admin.PageMenu where Controller = 'MiscInvoiceGW' and PageMenuID = 136)
BEGIN
	UPDATE [PREBONDED].Admin.PageMenu set Controller = 'MiscInvoice' where Controller = 'MiscInvoiceGW' and PageMenuID = 136
END
GO

IF EXISTS (SELECT * FROM PREBONDED.information_schema.columns WHERE table_name = 'trnManualDocumentDetails' and COLUMN_name = 'MiscInvoiceGWID')
BEGIN
EXEC sp_RENAME 'trnManualDocumentDetails.MiscInvoiceGWID' , 'MiscInvoiceID', 'COLUMN'
END
GO




IF NOT EXISTS (select * from [Admin].[GeneralSettings] where [StrKey] = 'EXBRF' and flagdeleted = 0)
BEGIN
		INSERT INTO [Admin].[GeneralSettings]
		([StrKey],[StrValue],[ModuleName],[Description],[Createdby],[CreatedDate])
		VALUES
		('EXBRF','EXBRF-','Prefix','EX-BOND Reference No','1',[dbo].[GetCurrentDatetime]())
END
GO
-------------------------------------------------------------
--NAME :DHRUVI
--DATE :15/07/2024

IF NOT EXISTS (select * from [Admin].[GeneralSettings] where [StrKey] = 'CNSBS' and flagdeleted = 0)
BEGIN
	UPDATE Admin.GeneralSettings SET StrValue='BNDCCNBI##FINANCIALYEAR##',Description='Bond Credit Note',StrKey='BICN' WHERE StrKey='CNSBS'
END
GO
----------------
IF NOT EXISTS (select * from [Admin].[GeneralSettings] where [StrKey] = 'CNETI' and flagdeleted = 0)
BEGIN
UPDATE Admin.GeneralSettings SET StrValue='BNDCCNCM##FINANCIALYEAR##',Description='Empty Credit Note',StrKey='EICN' WHERE StrKey='CNETI'
END
GO
----------------
IF NOT EXISTS (select * from [Admin].[GeneralSettings] where [StrKey] = 'CNMTI' and flagdeleted = 0)
BEGIN
UPDATE Admin.GeneralSettings SET StrValue='BNDCCNMS##FINANCIALYEAR##',Description='Misc Credit Note',StrKey='MICN' WHERE StrKey='CNMTI'
END
GO
------------------
IF NOT EXISTS (select * from [Admin].[GeneralSettings] where [StrKey] = 'CNHTI' and flagdeleted = 0)
BEGIN
UPDATE Admin.GeneralSettings SET StrValue='BNDCCNCE##FINANCIALYEAR##',Description='Export Credit Note',StrKey='EXICN' WHERE StrKey='CNHTI'
END
GO

-- Nikul
-- 15-07-2024

IF EXISTS (SELECT * FROM PREBONDED.information_schema.columns WHERE table_name = 'MiscInvoice' and COLUMN_name = 'InBoeID')
BEGIN
EXEC sp_RENAME 'MiscInvoice.InBoeID' , 'trnDocumentLotDetailsID', 'COLUMN'
END
GO

--Nikul
--19-07-2024

IF NOT EXISTS (SELECT * FROM [PREBONDED].Information_schema.Columns WHERE TABLE_NAME = 'trnEmptyContainerOutGatePass' AND COLUMN_NAME = 'YearID')
BEGIN
	ALTER TABLE [PREBONDED].[dbo].trnEmptyContainerOutGatePass ADD YearID INT 
END
GO

IF NOT EXISTS (SELECT * FROM [PREBONDED_History].Information_schema.Columns WHERE TABLE_NAME = 'trnEmptyContainerOutGatePass_History' AND COLUMN_NAME = 'YearID')
BEGIN
	ALTER TABLE [PREBONDED_History].[dbo].trnEmptyContainerOutGatePass_History ADD YearID INT 
END
GO

IF NOT EXISTS (SELECT * FROM [PREBONDED].Information_schema.Columns WHERE TABLE_NAME = 'trnExportCLP' AND COLUMN_NAME = 'YearID')
BEGIN
	ALTER TABLE [PREBONDED].[dbo].trnExportCLP ADD YearID INT 
END
GO

IF NOT EXISTS (SELECT * FROM [PREBONDED_History].Information_schema.Columns WHERE TABLE_NAME = 'trnExportCLP_History' AND COLUMN_NAME = 'YearID')
BEGIN
	ALTER TABLE [PREBONDED_History].[dbo].trnExportCLP_History ADD YearID INT 
END
GO


IF NOT EXISTS (SELECT * FROM [PREBONDED].Information_schema.Columns WHERE TABLE_NAME = 'trnContainerSSR' AND COLUMN_NAME = 'YearID')
BEGIN
	ALTER TABLE [PREBONDED].[dbo].trnContainerSSR ADD YearID INT 
END
GO

IF NOT EXISTS (SELECT * FROM [PREBONDED].Information_schema.Columns WHERE TABLE_NAME = 'trnCargoSSR' AND COLUMN_NAME = 'YearID')
BEGIN
	ALTER TABLE [PREBONDED].[dbo].trnCargoSSR ADD YearID INT 
END
GO

-- Nikul
-- 15-07-2024

IF EXISTS (SELECT * FROM PREBONDED.[Admin].[PageMenu] where Controller = 'Reports' and MenuName = 'Bond Invoice Register' AND PageMenuID = 250)
BEGIN
UPDATE PREBONDED.[Admin].[PageMenu] SET FlagDeleted = 1 WHERE [Action] = 'BondInvoiceRegister' AND PageMenuID = 250
END
GO

-----------------------------------------------------
--DHRUVI
--30/07/2024
IF NOT EXISTS (SELECT * FROM [PREBONDED].Information_schema.Columns WHERE TABLE_NAME = 'trnExBondDocumentEntryDetails' AND COLUMN_NAME = 'trnExportDocumentDeclarationLotDetailsID')
BEGIN
ALTER TABLE [PREBONDED].[dbo].trnExBondDocumentEntryDetails ADD  trnExportDocumentDeclarationLotDetailsID INT NULL
END 
GO
IF NOT EXISTS (SELECT * FROM [PREBONDED].Information_schema.Columns WHERE TABLE_NAME = 'trnExBondDocumentEntryDetails' AND COLUMN_NAME = 'Exporter')
BEGIN
ALTER TABLE [PREBONDED].[dbo].trnExBondDocumentEntryDetails ADD Exporter VARCHAR(255) NULL
END
GO
IF NOT EXISTS (SELECT * FROM [PREBONDED].Information_schema.Columns WHERE TABLE_NAME = 'trnExBondDocumentEntryDetails' AND COLUMN_NAME = 'ExporterID')
BEGIN
ALTER TABLE [PREBONDED].[dbo].trnExBondDocumentEntryDetails ADD ExporterID INT NULL
END
GO
-----------------------------------------------------------------------------------------------------------
IF NOT EXISTS (SELECT * FROM [PREBONDED].Admin.GeneralSettings WHERE StrKey = 'CLSC' AND ModuleName = 'TariffHead')
BEGIN
insert into Admin.GeneralSettings (StrKey,StrValue,ModuleName,Description,Flagdeleted,IsActive,Createdby,CreatedDate)
											values ('CLSC', '71', 'TariffHead', 'WH - Casual Labour supplied',0 , 1, 1, dbo.GetCurrentDateTime())						
END
GO	
--DHRUVI
--31/07/2024
IF NOT EXISTS (SELECT * FROM [PREBONDED].Information_schema.Columns WHERE TABLE_NAME = 'MstrGeneralTariffNOCWiseDetails' AND COLUMN_NAME = 'trnExportStufingWONo')
BEGIN
ALTER TABLE [PREBONDED].[dbo].MstrGeneralTariffNOCWiseDetails ADD trnExportStufingWONo VARCHAR(255)
END
GO
IF NOT EXISTS (SELECT * FROM [PREBONDED].Information_schema.Columns WHERE TABLE_NAME = 'MstrGeneralTariffNOCWiseDetails' AND COLUMN_NAME = 'trnExportStufingWOID')
BEGIN
ALTER TABLE [PREBONDED].[dbo].MstrGeneralTariffNOCWiseDetails ADD	trnExportStufingWOID INT
END
GO
IF NOT EXISTS (SELECT * FROM [PREBONDED].Information_schema.Columns WHERE TABLE_NAME = 'MstrGeneralTariffNOCWiseDetails' AND COLUMN_NAME = 'SbNo')
BEGIN
ALTER TABLE [PREBONDED].[dbo].MstrGeneralTariffNOCWiseDetails ADD SbNo VARCHAR(255)
END
GO
IF NOT EXISTS (SELECT * FROM [PREBONDED].Information_schema.Columns WHERE TABLE_NAME = 'MstrGeneralTariffNOCWiseDetails' AND COLUMN_NAME = 'trnExportStufingWOSBDetailsID')
BEGIN
ALTER TABLE [PREBONDED].[dbo].MstrGeneralTariffNOCWiseDetails ADD trnExportStufingWOSBDetailsID INT
END
GO

-----------------------------------
--Name : DHRUVI
--Date :06/08/2024

UPDATE [PREBONDED].Admin.GeneralSettings SET Description='Bond - Empty Lift Off charges - Export' WHERE StrValue='55' AND ModuleName = 'TariffHead'
UPDATE [PREBONDED].[Admin].[PageMenu] SET FlagDeleted = 0, Controller = 'ExportInvoice' WHERE PageMenuID = '174'
UPDATE [PREBONDED].Admin.GeneralSettings SET Description='Bond - Empty Transportation From Others To BW - Export' WHERE StrValue='57' AND GeneralSettingsID=1110 AND ModuleName='TariffHead'
UPDATE [PREBONDED].Admin.GeneralSettings SET Description='Bond - Empty Lift On charges - Export' WHERE StrValue='56' AND GeneralSettingsID=1107 AND ModuleName='TariffHead'
DELETE FROM Admin.GeneralSettings WHERE StrKey='ECSCW' AND GeneralSettingsID=1097
UPDATE [PREBONDED].Admin.GeneralSettings SET Description='Bond - Empty Container Storage Charges - Export' WHERE StrValue='25' AND GeneralSettingsID=1111 AND ModuleName='TariffHead'
UPDATE [PREBONDED].Admin.GeneralSettings SET Description='Bond - Loaded Container Storage Charges - Export' WHERE StrValue='18' AND GeneralSettingsID=1101 AND ModuleName='TariffHead'

IF NOT EXISTS (SELECT * FROM [PREBONDED].Admin.GeneralSettings WHERE StrKey = 'BREMC' AND ModuleName = 'TariffHead')
BEGIN
INSERT INTO [PREBONDED].Admin.GeneralSettings (StrKey,StrValue,ModuleName,Description,Flagdeleted,IsActive,Createdby,CreatedDate)
											values ('BREMC', '73', 'TariffHead', 'Bond - Refer Monitoring Charges',0 , 1, 1, dbo.GetCurrentDateTime())						
END
GO

------------------------------------------
IF NOT EXISTS (SELECT * FROM [PREBONDED].Information_schema.Columns WHERE TABLE_NAME = 'trnExportCLP' AND COLUMN_NAME = 'BillCommodity')
BEGIN
ALTER TABLE trnExportCLP ADD BillCommodity VARCHAR(255) NULL
END
GO
IF NOT EXISTS (SELECT * FROM [PREBONDED].Information_schema.Columns WHERE TABLE_NAME = 'trnExportCLP' AND COLUMN_NAME = 'BillCommodityID')
BEGIN
ALTER TABLE trnExportCLP ADD BillCommodityID INT NULL
END
GO

IF  EXISTS (SELECT * FROM [PREBONDED].Admin.GeneralSettings WHERE StrKey = 'BREMC' AND ModuleName = 'TariffHead')
BEGIN
		UPDATE [PREBONDED].Admin.GeneralSettings SET StrValue='74',Description='Bond - Refer Monitoring Charges-Export' WHERE StrKey='BREMC'
END
GO

IF NOT EXISTS (SELECT * FROM [PREBONDED].Admin.GeneralSettings WHERE StrKey = 'BRMC' AND ModuleName = 'TariffHead')
BEGIN
INSERT INTO [PREBONDED].Admin.GeneralSettings (StrKey,StrValue,ModuleName,Description,Flagdeleted,IsActive,Createdby,CreatedDate)
											values ('BRMC', '73', 'TariffHead', 'Bond - Refer Monitoring Charges',0 , 1, 1, dbo.GetCurrentDateTime())						
END
GO

---------------------------------------------------------------------------------
--Name : DHRUVI
--Date : 14/08/2024

IF NOT EXISTS (SELECT * FROM [PREBONDED].Information_schema.Columns WHERE TABLE_NAME = 'trnEmptyContainerOutWODetails' AND COLUMN_NAME = 'trnEmptyContainerGateInID')
BEGIN
ALTER TABLE trnEmptyContainerOutWODetails ADD trnEmptyContainerGateInID INT NULL
END
GO
IF NOT EXISTS (SELECT * FROM [PREBONDED].Information_schema.Columns WHERE TABLE_NAME = 'trnEmptyContainerOutWODetails' AND COLUMN_NAME = 'trnEmptyContainerGateInDetailsID')
BEGIN
ALTER TABLE trnEmptyContainerOutWODetails ADD trnEmptyContainerGateInDetailsID INT NULL
END 
GO
IF NOT EXISTS (SELECT * FROM [PREBONDED].Information_schema.Columns WHERE TABLE_NAME = 'trnEmptyContainerOutWO' AND COLUMN_NAME = 'trnEmptyContainerGateInID')
BEGIN
ALTER TABLE trnEmptyContainerOutWO ADD trnEmptyContainerGateInID INT null
END
GO
IF NOT EXISTS (SELECT * FROM [PREBONDED].Information_schema.Columns WHERE TABLE_NAME = 'trnEmptyContainerOutWO' AND COLUMN_NAME = 'EmptyContainerGateInNo')
BEGIN
ALTER TABLE trnEmptyContainerOutWO ADD EmptyContainerGateInNo VARCHAR(255) null
END
GO

-----------------------------------------------------------------
IF NOT EXISTS (SELECT * FROM [PREBONDED].Admin.GeneralSettings WHERE StrKey = 'RETCE' AND ModuleName = 'TariffHead')
BEGIN
INSERT INTO [PREBONDED].Admin.GeneralSettings (StrKey,StrValue,ModuleName,Description,Flagdeleted,IsActive,Createdby,CreatedDate)
											values ('RETCE', 54, 'TariffHead', 'Bond - Return Empty Transportation Charges - Export',0 , 1, 1, dbo.GetCurrentDateTime())						
END
GO	

IF NOT EXISTS (SELECT * FROM [PREBONDED].Admin.GeneralSettings WHERE StrKey = 'RESCE' AND ModuleName = 'TariffHead')
BEGIN
INSERT INTO [PREBONDED].Admin.GeneralSettings (StrKey,StrValue,ModuleName,Description,Flagdeleted,IsActive,Createdby,CreatedDate)
											values ('RESCE', 51, 'TariffHead', 'Bond - Return Empty Container Storage Charges - Export',0 , 1, 1, dbo.GetCurrentDateTime())						
END
GO

UPDATE  ADMIN.GeneralSettings SET Description='Bond - Return Empty Lift Off Charges - Export' WHERE StrValue='52' AND StrKey='RELOF' AND GeneralSettingsID=1108
UPDATE  ADMIN.GeneralSettings SET Description='Bond - Return Empty Lift On Charges - Export' WHERE StrValue='53' AND StrKey='RELON' AND GeneralSettingsID=1109

IF NOT EXISTS (SELECT * FROM [PREBONDED].Information_schema.Columns WHERE TABLE_NAME = 'EmptyInvoiceConsolidateChargeDetails' AND COLUMN_NAME = 'trnEmptyContainerGateInDetailsID')
BEGIN
ALTER TABLE EmptyInvoiceConsolidateChargeDetails	ADD trnEmptyContainerGateInDetailsID INT NULL
END
GO
IF NOT EXISTS (SELECT * FROM [PREBONDED].Information_schema.Columns WHERE TABLE_NAME = 'EmptyInvoice' AND COLUMN_NAME = 'trnEmptyContainerGateInDetailsID')
BEGIN
ALTER TABLE EmptyInvoice	ADD trnEmptyContainerGateInDetailsID INT
END
GO
IF NOT EXISTS (SELECT * FROM [PREBONDED].Information_schema.Columns WHERE TABLE_NAME = 'EmptyInvoice' AND COLUMN_NAME = 'ContainerStatus')
BEGIN
ALTER TABLE EmptyInvoice	ADD ContainerStatus VARCHAR(255)
END
GO

--------------------------------------------------------------
--DHRUVI
--21/08/2024
IF NOT EXISTS (SELECT * FROM [PREBONDED].Information_schema.Columns WHERE TABLE_NAME = 'trnCargoTruckOutwardCumGatepassDetails' AND COLUMN_NAME = 'IsAreaGroup')
BEGIN
ALTER TABLE trnCargoTruckOutwardCumGatepassDetails ADD IsAreaGroup BIGINT DEFAULT(0)
END
GO
IF NOT EXISTS (SELECT * FROM [PREBONDED].Information_schema.Columns WHERE TABLE_NAME = 'trnExportCLPBOEItems' AND COLUMN_NAME = 'IsAreaGroup')
BEGIN
ALTER TABLE trnExportCLPBOEItems ADD IsAreaGroup BIGINT DEFAULT(0)
END
GO
IF NOT EXISTS (SELECT * FROM [PREBONDED].Information_schema.Columns WHERE TABLE_NAME = 'trnExportCLPBOEItems' AND COLUMN_NAME = 'trnexportstufingwoSBDetailsID')
BEGIN
alter table trnExportCLPBOEItems ADD trnexportstufingwoSBDetailsID int
END
GO
-----------------------------------------------------------------
--for IsAreaGroup value update FOR AREA GROUPING

DECLARE @trnCargoTruckOutwardCumGatepassDetailsID int,@trnCargoTruckOutwardCumGatepassID INT,@trnExBondDocumentEntryDetailsID INT
                                        

	DECLARE CargoTruckOutwardCumGatepass_CURSOR CURSOR FOR
                                            
		SELECT trnCargoTruckOutwardCumGatepassDetailsID,trnCargoTruckOutwardCumGatepassID,trnExBondDocumentEntryDetailsID FROM trnCargoTruckOutwardCumGatepassDetails 
	OPEN CargoTruckOutwardCumGatepass_CURSOR

	FETCH NEXT FROM CargoTruckOutwardCumGatepass_CURSOR INTO @trnCargoTruckOutwardCumGatepassDetailsID,@trnCargoTruckOutwardCumGatepassID,@trnExBondDocumentEntryDetailsID

	WHILE @@FETCH_STATUS = 0
	BEGIN 
    
																				
		Update  trnCargoTruckOutwardCumGatepassDetails  SET IsAreaGroup=(SELECT MAX(ISNULL(S.IsAreaGroup,0))+1 FROM trnCargoTruckOutwardCumGatepassDetails S 
																				)
	
		where  trnExBondDocumentEntryDetailsID=@trnExBondDocumentEntryDetailsID AND trnCargoTruckOutwardCumGatepassID=@trnCargoTruckOutwardCumGatepassID
 
		FETCH NEXT FROM CargoTruckOutwardCumGatepass_CURSOR INTO  @trnCargoTruckOutwardCumGatepassDetailsID,@trnCargoTruckOutwardCumGatepassID,@trnExBondDocumentEntryDetailsID
	END

	CLOSE CargoTruckOutwardCumGatepass_CURSOR
	DEALLOCATE CargoTruckOutwardCumGatepass_CURSOR;


-------------------------------------------------------------------
IF NOT EXISTS (SELECT * FROM [PREBONDED].Admin.GeneralSettings WHERE StrKey = 'BDOC' AND ModuleName = 'TariffHead')
BEGIN
INSERT INTO [PREBONDED].Admin.GeneralSettings (StrKey,StrValue,ModuleName,Description,Flagdeleted,IsActive,Createdby,CreatedDate)
											values ('BDOC', 69, 'TariffHead', 'Bond - Documentation Charges',0 , 1, 1, dbo.GetCurrentDateTime())						
END
GO	

IF NOT EXISTS (SELECT * FROM [PREBONDED].Admin.GeneralSettings WHERE StrKey = 'BEOBC' AND ModuleName = 'TariffHead')
BEGIN
INSERT INTO [PREBONDED].Admin.GeneralSettings (StrKey,StrValue,ModuleName,Description,Flagdeleted,IsActive,Createdby,CreatedDate)
											values ('BEOBC', 68, 'TariffHead', 'Bond - Exbond Charges',0 , 1, 1, dbo.GetCurrentDateTime())						
END
GO	

--------------------------------------------------------------
--NIKUL
--10/09/2024

ALTER TABLE [dbo].[MiscInvoiceGSTDetails] ADD  DEFAULT ((0)) FOR [Flagdeleted]
GO
ALTER TABLE [dbo].[MiscInvoiceCargoBasedStorage] ADD  CONSTRAINT [DF_MiscInvoiceCargoBasedStorage_Flagdeleted]  DEFAULT ((0)) FOR [Flagdeleted]
GO

-----------------------------------------------------------------------
--Nikul
--12/09/2024


IF NOT EXISTS (SELECT * FROM [PREBONDED].Information_schema.Columns WHERE TABLE_NAME = 'MiscInvoiceContainerSlabwiseStorage' AND COLUMN_NAME = 'Rate')
BEGIN
	ALTER TABLE MiscInvoiceContainerSlabwiseStorage ADD Rate decimal(10, 2) 
END
GO

IF NOT EXISTS (SELECT * FROM [PREBONDED].Information_schema.Columns WHERE TABLE_NAME = 'MiscInvoiceCargoSlabwiseStorage' AND COLUMN_NAME = 'Rate')
BEGIN
	ALTER TABLE MiscInvoiceCargoSlabwiseStorage ADD Rate decimal(10, 2)
END
GO


----------------------------------------
--Dhruvi
--20/09/2024

UPDATE TD SET 
 TD.MstrTaxGroupID=TG.MstrTaxGroupID FROM MstrTariffHead TD
INNER JOIN MstrTaxGroup TG ON TG.HsnSacCode=TD.HSNSACCode 
WHERE TD.Flagdeleted=0 AND TD.MstrTaxGroupID=0

-----------------------------------
IF  EXISTS (select * from [PREBONDED].[Admin].[Pagemenu] where Controller = 'trnpreproforma' and MenuName='WH Proforma Invoice' and FlagDeleted = 0)
BEGIN
UPDATE [Admin].[PageMenu] SET MenuName='Bond Proforma Invoice' where Controller='trnpreproforma' and PageMenuID = 126
END

---------
update admin.PageMenu set FlagDeleted=1,IsActive=0 where  Controller='BondProformaInvoice' and PageMenuID=248
update admin.PageMenu set FlagDeleted=1,IsActive=0 where  Controller='StorageInvoice' and PageMenuID=130

----------------------
delete from Admin.GeneralSettings where StrKey='RPIN'

update Admin.GeneralSettings set StrValue='41'  where StrKey='BRMC'

ALTER TABLE MstrGeneralTariffNOCWiseDetails
ADD IsInLotGroup VARCHAR(255) NULL

ALTER TABLE MstrGeneralTariffNOCWise
ADD IsGroup BIT DEFAULT(1) NOT NULL

ALTER TABLE MstrGeneralTariffNOCWise
ADD MstrGeneralTariffNOCWiseDetailsID int

 ALTER TABLE MstrGeneralTariffNOCWiseDetails
 ADD Flagdeleted BIT DEFAULT(0) NOT NULL

 ALTER TABLE MstrGeneralTariffPartyWiseDetails
ADD Flagdeleted BIT DEFAULT(0) NOT NULL

--------------------------
--DHRUVI
--08/01/2024

update Admin.PageMenu set MenuName='Bond Proforma Invoice' where PageMenuID=126 and Controller='trnpreproforma'

--DHRUVI
--24/03/2025
ALTER TABLE PartyWiseTariffPriority
ADD InvoiceType VARCHAR(255) NULL

ALTER TABLE MstrGeneralTariffPartyWiseEffetiveDate
ADD IsActive BIT DEFAULT(0)

ALTER TABLE MstrGeneralTariffPartyWiseDetails
ADD ContractName NVARCHAR(MAX)

ALTER TABLE MstrGeneralTariffPartyWiseDetails
 ADD BillToPartyID INT

ALTER TABLE MstrGeneralTariffPartyWiseDetails
ADD BillToParty NVARCHAR(MAX)

ALTER TABLE MstrGeneralTariffPartyWiseDetails
ADD LineID INT

ALTER TABLE MstrGeneralTariffPartyWiseDetails
ADD Line NVARCHAR(MAX)

ALTER TABLE MstrGeneralTariffPartyWiseDetails
ADD CHAID INT

ALTER TABLE MstrGeneralTariffPartyWiseDetails
ADD CHA NVARCHAR(MAX)

ALTER TABLE MstrGeneralTariffPartyWiseDetails
ADD ImporterID INT

ALTER TABLE MstrGeneralTariffPartyWiseDetails
ADD Importer NVARCHAR(MAX)

ALTER TABLE MstrGeneralTariffPartyWiseDetails
ADD AgentID INT

ALTER TABLE MstrGeneralTariffPartyWiseDetails
ADD Agent NVARCHAR(MAX)

ALTER TABLE MstrGeneralTariffPartyWiseDetails
ADD ExporterID INT

ALTER TABLE MstrGeneralTariffPartyWiseDetails
ADD Exporter NVARCHAR(MAX)

ALTER TABLE MstrGeneralTariffPartyWiseDetails
ADD ConsolerID INT

ALTER TABLE MstrGeneralTariffPartyWiseDetails
ADD Consoler NVARCHAR(MAX)

ALTER TABLE MstrGeneralTariffPartyWiseDetails
ADD ForwarderID INT

ALTER TABLE MstrGeneralTariffPartyWiseDetails
ADD Forwarder NVARCHAR(MAX)

ALTER TABLE MstrGeneralTariffPartyWiseEffetiveDate
ADD MstrGeneralTariffPartyWiseDetailsID INT NULL



---------------------
IF NOT EXISTS (select * from [PREBONDED].[Admin].[GeneralSettings] where [StrKey] = 'INVET' and flagdeleted = 0)
BEGIN
		INSERT INTO [PREBONDED].[Admin].[GeneralSettings]
		([StrKey],[StrValue],[ModuleName],[Description],[Createdby],[CreatedDate],[Flagdeleted],[IsActive])
		VALUES
		('INVET','SCTMT##FINANCIALYEAR##','Prefix','Empty Invoice Number For Empty Invoice','1',[dbo].[GetCurrentDatetime](),0,1)		
END
GO
-----------------------------------------------------------

IF NOT EXISTS (select * from [PREBONDED].[Admin].[GeneralSettings] where [StrKey] = 'BNDEI' and flagdeleted = 0)
BEGIN
		INSERT INTO [PREBONDED].[Admin].[GeneralSettings]
		([StrKey],[StrValue],[ModuleName],[Description],[Createdby],[CreatedDate],[Flagdeleted],[IsActive])
		VALUES
		('BNDEI','BNDEI##FINANCIALYEAR##','Prefix','Export Invoice','1',[dbo].[GetCurrentDatetime](),0,1)		
END
GO

ALTER TABLE trnContainerDestuffingItems
ADD IsAreaGroup BIGINT DEFAULT(0)

ALTER TABLE trnTruckDestuffingDetails
ADD IsAreaGroup BIGINT DEFAULT(0)

--------------------------

ALTER TABLE  [Admin].[GeneralSettings]
ADD DEFAULT 0 FOR Flagdeleted;

ALTER TABLE  [Admin].[GeneralSettings]
ADD DEFAULT 1 FOR IsActive
--NAME :DHRUVI
--DATE :25/04/2025
--FOR MOBILE APP
IF NOT EXISTS (SELECT * FROM [dbo].[MobileAPPGatePassPgList] WHERE PageName = '01-Loaded Container Gate In')
BEGIN
INSERT INTO [dbo].[MobileAPPGatePassPgList](PageName,PageNameForDownLoad,PrintUrl) VALUES
('01-Loaded Container Gate In','01-Loaded Container In Truck GatePass','trnContainerGateIn/GenerateAndDisplayReport/##ID##?format=pdf&UserName=##UserName##')
END 
GO


IF NOT EXISTS (SELECT * FROM [dbo].[MobileAPPGatePassPgList] WHERE PageName = '03-Cargo Truck GateIn Confirmation')
BEGIN
INSERT INTO [dbo].[MobileAPPGatePassPgList](PageName,PageNameForDownLoad,PrintUrl) VALUES
('03-Cargo Truck GateIn Confirmation','03-Cargo Gate In Truck','trnCargoGateIn/GenerateAndDisplayReport/##ID##?WorkOrderID=##WOID##&format=pdf&UserName=##UserName##')
END 
GO

IF NOT EXISTS (SELECT * FROM [dbo].[MobileAPPGatePassPgList] WHERE PageName = '05-Empty Truck In Confirmation')
BEGIN
INSERT INTO [dbo].[MobileAPPGatePassPgList](PageName,PageNameForDownLoad,PrintUrl) VALUES
('05-Empty Truck In Confirmation','05-Empty Truck In GatePass','trnEmptyTruckGateIn/GenerateAndDisplayReport/##ID##?Category=##Category##&Type=##TYPE##&TruckID=##TRUCKID##&format=pdf&UserName=##UserName##')
END 
GO

IF NOT EXISTS (SELECT * FROM [dbo].[MobileAPPGatePassPgList] WHERE PageName = '06-Empty Container Gate Out')
BEGIN
INSERT INTO [dbo].[MobileAPPGatePassPgList](PageName,PageNameForDownLoad,PrintUrl) VALUES
('06-Empty Container Gate Out','06-Empty Container Out Truck GatePass','trnEmptyContainerOutGatePass/GenerateAndDisplayReport/##ID##?format=pdf&UserName=##UserName##')
END 
GO

IF NOT EXISTS (SELECT * FROM [dbo].[MobileAPPGatePassPgList] WHERE PageName = '08-Cargo OutWard Truck Confirmation')
BEGIN
INSERT INTO [dbo].[MobileAPPGatePassPgList](PageName,PageNameForDownLoad,PrintUrl) VALUES
('08-Cargo OutWard Truck Confirmation','08-Cargo Out Truck','trnCargoTruckOutwardCumGatepass/GenerateAndDisplayReport/##ID##?trnEmptyTruckGateInsearchID=##EMPTYTRUCKID##&format=pdf&UserName=##UserName##')
END 
GO

IF NOT EXISTS (SELECT * FROM [dbo].[MobileAPPGatePassPgList] WHERE PageName = '10-Empty Container Gate In')
BEGIN
INSERT INTO [dbo].[MobileAPPGatePassPgList](PageName,PageNameForDownLoad,PrintUrl) VALUES
('10-Empty Container Gate In','10-Empty Container In Truck GatePass','trnEmptyContainerGateIn/GenerateAndDisplayReport/##ID##?format=pdf&UserName=##UserName##')
END 
GO

IF NOT EXISTS (SELECT * FROM [dbo].[MobileAPPGatePassPgList] WHERE PageName = '11-Empty Truck Out Confirmation')
BEGIN
INSERT INTO [dbo].[MobileAPPGatePassPgList](PageName,PageNameForDownLoad,PrintUrl) VALUES
('11-Empty Truck Out Confirmation','11-Empty Truck Out GatePass','trnEmptyTruckOutWO/GenerateAndDisplayReport/##ID##?WorkOrderID=##WOID##&TruckNo=##TRUCKNO##&format=pdf&UserName=##UserName##')
END 
GO

IF NOT EXISTS (SELECT * FROM [dbo].[MobileAPPGatePassPgList] WHERE PageName = '12-Loaded Container Gate Out')
BEGIN
INSERT INTO MobileAPPGatePassPgList(PageName,PageNameForDownLoad,PrintUrl) VALUES
('12-Loaded Container Gate Out','12-Loaded Container Out Truck GatePass','trnLoadedContainerOutGP/GenerateAndDisplayReport/##ID##?trnEmptyTruckGateInsearchID=##EMPTYTRUCKID##&format=pdf&UserName=##UserName##')
END
GO

IF NOT EXISTS (SELECT * FROM [dbo].[MobileAPPGatePassPgList] WHERE PageName = '7C-Loaded Container Out Truck GatePass')
BEGIN
INSERT INTO [dbo].[MobileAPPGatePassPgList](PageName,PageNameForDownLoad,PrintUrl) VALUES
('7C-Loaded Container Out Truck GatePass','7C-Loaded Container Out Truck GatePass - Export','trnLoadedContainerOutGP/GenerateAndDisplayReport/##ID##?trnEmptyTruckGateInsearchID=##EMPTYTRUCKID##&format=pdf&UserName=##UserName##')
END 
GO

-----------------------------------------------------------------------------

IF NOT EXISTS (SELECT * FROM [Admin].[GeneralSettings] WHERE [StrKey] = 'MCTGC' AND flagdeleted = 0)
BEGIN
		INSERT INTO [Admin].[GeneralSettings]
		([StrKey],[StrValue],[ModuleName],[Description],[Createdby],[CreatedDate])
		VALUES
		('MCTGC','2','MobileApp','Cargo Truck GateIn Confirmation','1',[dbo].[GetCurrentDatetime]())
END
GO

IF NOT EXISTS (SELECT * FROM [Admin].[GeneralSettings] WHERE [StrKey] = 'METOC' AND flagdeleted = 0)
BEGIN
		INSERT INTO [Admin].[GeneralSettings]
		([StrKey],[StrValue],[ModuleName],[Description],[Createdby],[CreatedDate])
		VALUES
		('METOC','7','MobileApp','Empty Truck Out Confirmation','1',[dbo].[GetCurrentDatetime]())
		
END
GO

IF NOT EXISTS (SELECT * FROM [Admin].[GeneralSettings] WHERE [StrKey] = 'MCGOC' AND flagdeleted = 0)
BEGIN
		INSERT INTO [Admin].[GeneralSettings]
		([StrKey],[StrValue],[ModuleName],[Description],[Createdby],[CreatedDate])
		VALUES
		('MCGOC','5','MobileApp','Cargo OutWard Truck Confirmation','1',[dbo].[GetCurrentDatetime]())
		
END
GO
IF NOT EXISTS (SELECT * FROM [Admin].[GeneralSettings] WHERE [StrKey] = 'MLCGI' AND flagdeleted = 0)
BEGIN
		INSERT INTO [Admin].[GeneralSettings]
		([StrKey],[StrValue],[ModuleName],[Description],[Createdby],[CreatedDate])
		VALUES
		('MLCGI','1','MobileApp','Loaded Container Gate In','1',[dbo].[GetCurrentDatetime]())
		
END
GO

IF NOT EXISTS (SELECT * FROM [Admin].[GeneralSettings] WHERE [StrKey] = 'MLCGO' AND flagdeleted = 0)
BEGIN
		INSERT INTO [Admin].[GeneralSettings]
		([StrKey],[StrValue],[ModuleName],[Description],[Createdby],[CreatedDate])
		VALUES
		('MLCGO','9','MobileApp','Loaded Container Gate Out','1',[dbo].[GetCurrentDatetime]())
		
END
GO

IF NOT EXISTS (SELECT * FROM [Admin].[GeneralSettings] WHERE [StrKey] = 'MECGI' AND flagdeleted = 0)
BEGIN
		INSERT INTO [Admin].[GeneralSettings]
		([StrKey],[StrValue],[ModuleName],[Description],[Createdby],[CreatedDate])
		VALUES
		('MECGI','6','MobileApp','Empty Container Gate In','1',[dbo].[GetCurrentDatetime]())		
END
GO

IF NOT EXISTS (SELECT * FROM [Admin].[GeneralSettings] WHERE [StrKey] = 'MECGO' AND flagdeleted = 0)
BEGIN
		INSERT INTO [Admin].[GeneralSettings]
		([StrKey],[StrValue],[ModuleName],[Description],[Createdby],[CreatedDate])
		VALUES
		('MECGO','4','MobileApp','Empty Container Gate Out','1',[dbo].[GetCurrentDatetime]())	
END
GO

IF NOT EXISTS (SELECT * FROM [Admin].[GeneralSettings] WHERE [StrKey] = 'METIC' AND flagdeleted = 0)
BEGIN
		INSERT INTO [Admin].[GeneralSettings]
		([StrKey],[StrValue],[ModuleName],[Description],[Createdby],[CreatedDate])
		VALUES
		('METIC','3','MobileApp','Empty Truck In Confirmation','1',[dbo].[GetCurrentDatetime]())		
END
GO
IF NOT EXISTS (SELECT * FROM [Admin].[GeneralSettings] WHERE [StrKey] = 'MLICG' AND flagdeleted = 0)
BEGIN
		INSERT INTO [Admin].[GeneralSettings]
		([StrKey],[StrValue],[ModuleName],[Description],[Createdby],[CreatedDate])
		VALUES
		('MLICG','8','MobileApp','Import Loaded Container Out GatePass','1',[dbo].[GetCurrentDatetime]())		
END
GO
---------------------------------------------
alter table trnLoadedContainerOutGP
add IsFinished bit not null default(0)

IF NOT EXISTS (SELECT * FROM [PREBONDED_History].Information_schema.Columns WHERE TABLE_NAME = 'trnLoadedContainerOutGP_history' AND COLUMN_NAME = 'IsFinished')
BEGIN
alter table [PREBONDED_History].[dbo].trnLoadedContainerOutGP_history add IsFinished bit not null default(0)
END
GO

---------------- For add IsFinished column in Loaded out GP ----------------------------------------
DISABLE TRIGGER dbo.TGR_trnLoadedContainerOutGP ON dbo.trnLoadedContainerOutGP

update LCGP set lcgp.IsFinished=1  FROM trnLoadedContainerOutGP LCGP      
INNER JOIN trnLoadedContainerOutGPDetails LCGPD ON LCGPD.trnLoadedContainerOutGPID=LCGP.trnLoadedContainerOutGPID AND LCGPD.Flagdeleted=0 AND ISNULL(LCGPD.trnexportmovementWOContainerDetailsID,0)!=0      
INNER JOIN trnEmptyTruckGateIn ETGI ON ETGI.trnEmptyTruckGateInID=LCGP.trnEmptyTruckGateInID AND ETGI.IsFinished=1 AND ETGI.Flagdeleted=0 AND ETGI.IsApproved=1      
WHERE LCGP.Flagdeleted=0 AND LCGP.TransactionType='ETG'      

update LCGP set lcgp.IsFinished=1  FROM trnLoadedContainerOutGP LCGP      
INNER JOIN trnLoadedContainerOutGPDetails LCGPD ON LCGPD.trnLoadedContainerOutGPID=LCGP.trnLoadedContainerOutGPID AND LCGPD.Flagdeleted=0 AND ISNULL(LCGPD.trnexportmovementWOContainerDetailsID,0)!=0      
INNER JOIN trnEmptyTruckGateIn ETGI ON ETGI.trnEmptyTruckGateInID=LCGP.trnEmptyTruckGateInID AND ETGI.IsFinished=1 AND ETGI.Flagdeleted=0 AND ETGI.IsApproved=1      
WHERE LCGP.Flagdeleted=0 AND LCGP.TransactionType='ETG'      

update LCGP set lcgp.IsFinished=1  FROM trnLoadedContainerOutGP LCGP      
INNER JOIN trnEmptyContainerGateIn ECGI ON ECGI.trnEmptyContainerGateInID=LCGP.trnEmptyTruckGateInID AND ECGI.Flagdeleted=0       
WHERE LCGP.Flagdeleted=0 AND LCGP.TransactionType='ECG' 

ENABLE TRIGGER dbo.TGR_trnLoadedContainerOutGP  ON dbo.trnLoadedContainerOutGP
-----------------------------
IF NOT EXISTS (SELECT * FROM INFORMATION_SCHEMA.COLUMNS WHERE TABLE_NAME='MstrCustomer' AND COLUMN_NAME='UserGroupName')
BEGIN
	ALTER TABLE MstrCustomer  ADD  UserGroupName varchar(255)  null
END

IF NOT EXISTS (SELECT * FROM INFORMATION_SCHEMA.COLUMNS  WHERE TABLE_NAME='MstrCustomer' AND COLUMN_NAME='UserGroupID')
BEGIN
	ALTER TABLE MstrCustomer  ADD  UserGroupID bigint  DEFAULT(0)
END

IF NOT EXISTS (SELECT * FROM UserGroup WHERE GroupName='CUSTOMER')
BEGIN
	INSERT INTO UserGroup (GroupName,Description,Createdby)	VALUES ('CUSTOMER','THIS GROUP IS USED FOR CUSTOMER PORTAL PAGE ACCESS AND MOBILE APP.',1)
END

UPDATE C SET c.UserGroupID = (select  u.UserGroupID from  [UserGroup] U WHERE U.GroupName = 'CUSTOMER' AND Flagdeleted=0)
,c.UserGroupName = (select  u.GroupName from  [UserGroup] U WHERE U.GroupName = 'CUSTOMER' AND Flagdeleted=0) 
from   MstrCustomer  c

----------------------------------------------------------
-- NIKUL
--30-05-2025

IF NOT EXISTS (SELECT * FROM INFORMATION_SCHEMA.COLUMNS  WHERE TABLE_NAME='trnCargoSSR' AND COLUMN_NAME='Remarks')
BEGIN
	ALTER TABLE trnCargoSSR ADD Remarks VARCHAR(255)
END

IF NOT EXISTS (SELECT * FROM INFORMATION_SCHEMA.COLUMNS  WHERE TABLE_NAME='trnReeferPluginOut' AND COLUMN_NAME='trnEmptyTruckGateInDomesticID')
BEGIN
	ALTER TABLE trnReeferPluginOut ADD trnEmptyTruckGateInDomesticID int default (0)
END

IF NOT EXISTS (SELECT * FROM INFORMATION_SCHEMA.COLUMNS  WHERE TABLE_NAME='trnCargoTruckOutwardCumGatepassContainerDetails' AND COLUMN_NAME='trnEmptyTruckGateInDomesticID')
BEGIN
	ALTER TABLE trnCargoTruckOutwardCumGatepassContainerDetails ADD trnEmptyTruckGateInDomesticID int default (0)
END


UPDATE A SET A.trnEmptyTruckGateInDomesticID = B.trnEmptyTruckGateInDomesticID FROM trnCargoTruckOutwardCumGatepassContainerDetails A
INNER JOIN trnEmptyTruckGateInDomestic B ON B.ContNo = A.CONTNO and B.Flagdeleted = 0
where A.Flagdeleted = 0


update Admin.Generalsettings set StrValue = 'It is presumed that all consignments(import/export) being received at Terminal are adequately insured against all possible risks during transportation and storage and company (Seabird) assumes no liability in this respect.<br /><br /> "Supplies to SEZ Unit / Developer for authorized operations under Letter of Undertaking /Bond no. IV/05-05/Bond/Tech-Mundra/2017-18  dated 10th Aug 2017 without payment of Integrated Tax being ''zero rated supply'' in terms of sect 16(1) (b) of IGST Act, 2017".<br /><br />1) It is presumed that all consignments ( import / export ) being received at CFS are adequately insured against all possible risk during transportation and storage and the company Seabird Marine Services (Gujarat) Pvt. Ltd. assumes No liability in this respects.<br />2) Invoice of Container Detention / Cargo Storage will be issued at the time of movement of Container / Truck if any.<br />3) This document is not a guarantee for delivery of Container / Cargo.Delivery is strictly on completion of Custom & Statutory formalities.<br />4) Any discrepancy athe Invoice has to be reportedwithin 7 days <br />5) Delayed payment beyond due date would attract Interest @ 24 % p.a.' where flagdeleted = 0 and isactive=1 and StrKey = 'PRONO'

---------------------------------------
--DHRUVI
--23/06/2025
ALTER TABLE trnTruckDestuffingDetails ADD trnDocumentContainerID INT DEFAULT(0) NOT NULL
ALTER TABLE trnCargoTruckOutwardCumGatepassDetails ADD trnDocumentContainerID INT DEFAULT(0) NOT NULL