USE [CFS_BONDED_WAREHOUSE]
GO

/****** Object:  Table [dbo].[trnExportDocumentDeclarationLotDetails]    Script Date: 01/08/2024 11:48:08 AM ******/
SET ANSI_NULLS ON
GO

SET QUOTED_IDENTIFIER ON
GO

CREATE TABLE [dbo].[trnExportDocumentDeclarationLotDetails](
	[trnExportDocumentDeclarationLotDetailsID] [bigint] IDENTITY(1,1) NOT NULL,
	[trnExportDocumentDeclarationID] [bigint] NOT NULL,
	[ShiipingBillNo] [varchar](255) NULL,
	[ShipingBillDate] [datetime] NULL,
	[InvoiceNumber] [varchar](255) NULL,
	[InvoiceDate] [datetime] NULL,
	[SpaceCertificateID] [bigint] NOT NULL,
	[SpaceCertificateNO] [varchar](255) NULL,
	[NOCDate] [datetime] NULL,
	[LOTNO] [varchar](255) NULL,
	[CargoType] [varchar](255) NULL,
	[CargoTypeID] [int] NULL,
	[BULKSTATUS] [varchar](255) NULL,
	[ExporterID] [bigint] NULL,
	[ExporterNAME] [varchar](255) NULL,
	[ExporterADDRESS] [varchar](max) NULL,
	[ConsigneeNAME] [varchar](255) NULL,
	[ConsigneeADDRESS] [varchar](max) NULL,
	[ToLocationID] [bigint] NULL,
	[ToLocationName] [varchar](max) NULL,
	[FOB] [varchar](255) NULL,
	[MARKSANDNOS] [varchar](255) NULL,
	[Class] [int] NULL,
	[UN] [int] NULL,
	[TEMP] [numeric](18, 2) NULL,
	[Flagdeleted] [bit] NOT NULL,
	[Createdby] [bigint] NULL,
	[CreatedDate] [datetime] NOT NULL,
	[UpdatedBy] [bigint] NULL,
	[UpdatedDate] [datetime] NULL,
	[BatchID] [bigint] NULL,
	[BatchNo] [varchar](255) NULL,
	[DecPkgs] [decimal](10, 2) NULL,
	[DecPcs] [decimal](10, 2) NULL,
	[DecWeight] [decimal](10, 2) NULL,
	[DocumentLotNO] [varchar](255) NULL
) ON [PRIMARY] TEXTIMAGE_ON [PRIMARY]
GO

ALTER TABLE [dbo].[trnExportDocumentDeclarationLotDetails] ADD  DEFAULT ((0)) FOR [Flagdeleted]
GO

ALTER TABLE [dbo].[trnExportDocumentDeclarationLotDetails] ADD  DEFAULT ([dbo].[GetCurrentDateTime]()) FOR [CreatedDate]
GO


