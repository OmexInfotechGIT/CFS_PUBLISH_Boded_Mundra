USE [CFS_BONDED_WAREHOUSE_History]
GO

/****** Object:  Table [dbo].[trnExportDocumentDeclarationLotDetails_History]    Script Date: 1/10/2024 11:09:07 AM ******/
SET ANSI_NULLS ON
GO

SET QUOTED_IDENTIFIER ON
GO
IF EXISTS (SELECT * FROM INFORMATION_SCHEMA.TABLES WHERE  TABLE_NAME='trnExportDocumentDeclarationGWLotDetails_History')
BEGIN
 DROP TABLE trnExportDocumentDeclarationGWLotDetails_History
END
GO
IF  NOT EXISTS (SELECT * FROM INFORMATION_SCHEMA.TABLES WHERE  TABLE_NAME='trnExportDocumentDeclarationLotDetails_History')
BEGIN
CREATE TABLE [dbo].[trnExportDocumentDeclarationLotDetails_History](
	[trnExportDocumentDeclarationLotDetails_HistoryID] [bigint] IDENTITY(1,1) NOT NULL,
	[trnExportDocumentDeclarationLotDetailsID] [int] NULL,
	[trnExportDocumentDeclarationID] [bigint] NOT NULL,
	[BOENo] [varchar](255) NULL,
	[BOEDate] [datetime] NULL,
	[BLNo] [varchar](255) NULL,
	[BLDate] [datetime] NULL,
	[trnDocumentID] [bigint] NOT NULL,
	[trnDocumentNo] [varchar](255) NULL,
	[DOCDate] [datetime] NULL,
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
	[Caption] [varchar](255) NULL
) ON [PRIMARY] TEXTIMAGE_ON [PRIMARY]
end 
GO


