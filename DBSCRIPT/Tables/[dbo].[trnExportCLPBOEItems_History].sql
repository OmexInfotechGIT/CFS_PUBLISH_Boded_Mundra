USE [CFS_BONDED_WAREHOUSE_History]
GO

/****** Object:  Table [dbo].[trnExportCLPBOEItems]    Script Date: 01/17/2024 4:43:32 PM ******/
SET ANSI_NULLS ON
GO

SET QUOTED_IDENTIFIER ON
GO
IF EXISTS(SELECT * FROM [CFS_BONDED_WAREHOUSE_History].INFORMATION_SCHEMA.TABLES WHERE  TABLE_NAME='trnExportCLPBOEItems_History')
BEGIN
	DROP TABLE [CFS_BONDED_WAREHOUSE_History].[dbo].[trnExportCLPBOEItems_History]
END
GO
CREATE TABLE [dbo].[trnExportCLPBOEItems_History](
	[trnExportCLPBOEItems_HistoryID] [bigint] IDENTITY(1,1) NOT NULL,
	[trnExportCLPBOEItemsID] [bigint]  NOT NULL,
	[trnDocumentLotDetailsID] [int] NULL,
	[trnExportDocumentDeclarationID] [int] NULL,
	[trnExportDocumentDeclarationLotDetailsID] [int] NULL,
	[ShippingBillNo] [varchar](255) NULL,
	[WHLocationID] [bigint] NULL,
	[WHLocation] [varchar](255) NULL,
	[WHPackages] [decimal](10, 2) NULL,
	[WHPieces] [decimal](10, 2) NULL,
	[WHWeight] [decimal](10, 2) NULL,
	[CLPPackages] [decimal](10, 2) NULL,
	[CLPPieces] [decimal](10, 2) NULL,
	[CLPWeight] [decimal](10, 2) NULL,
	[PackingTypeID] [int] NULL,
	[PackingType] [varchar](255) NULL,
	[BillCommodityID] [int] NULL,
	[BillCommodity] [varchar](255) NULL,
	[EquipmentID] [int] NULL,
	[Equipment] [varchar](255) NULL,
	[AreaUOM] [varchar](255) NULL,
	[BalanceArea] [decimal](10, 2) NULL,
	[AreaCleared] [decimal](10, 2) NULL,
	[Flagdeleted] [bit] NOT NULL,
	[Createdby] [bigint] NULL,
	[CreatedDate] [datetime] NOT NULL,
	[UpdatedBy] [bigint] NULL,
	[UpdatedDate] [datetime] NULL,
	[trnExportCLPID] [bigint] NULL,
	[trnDestuffingID] [int] NULL,
	[Type] [char](1) NULL,
	[trnDocumentBoiItemsID] [int] NULL,
	[trnExBondDocumentEntryDetailsID] [int] NULL,
	[caption][varchar](255) NULL
) ON [PRIMARY]
GO

ALTER TABLE [dbo].[trnExportCLPBOEItems_History] ADD  DEFAULT ((0)) FOR [Flagdeleted]
GO

ALTER TABLE [dbo].[trnExportCLPBOEItems_History] ADD  DEFAULT ([dbo].[GetCurrentDateTime]()) FOR [CreatedDate]
GO


