USE [CFS_BONDED_WAREHOUSE_History]
GO

/****** Object:  Table [dbo].[trnExportDocumentDeclaration_History]    Script Date: 1/10/2024 10:16:06 AM ******/
SET ANSI_NULLS ON
GO

SET QUOTED_IDENTIFIER ON
GO
IF EXISTS (SELECT * FROM INFORMATION_SCHEMA.TABLES WHERE  TABLE_NAME='trnExportDocumentDeclarationGWLotDetails_History')
BEGIN
 DROP TABLE trnExportDocumentDeclarationGWLotDetails_History
END
GO

IF  NOT EXISTS (SELECT * FROM INFORMATION_SCHEMA.TABLES WHERE  TABLE_NAME='trnExportDocumentDeclaration_History')
BEGIN
CREATE TABLE [dbo].[trnExportDocumentDeclaration_History](
	[trnExportDocumentDeclarationGW_HistoryID] [bigint] IDENTITY(1,1) NOT NULL,
	[trnExportDocumentDeclarationID] [bigint] NOT NULL,
	[DocumentRefPrefix] [varchar](255) NULL,
	[DocumentRefNo] [varchar](255) NULL CONSTRAINT [DF_trnExportDocumentDeclarationGWHistory_DocRefNo]  DEFAULT ((0)),
	[CHAName] [varchar](255) NULL,
	[CHAID] [int] NULL,
	[ForwarderName] [varchar](255) NULL,
	[ForwarderID] [int] NULL,
	[ConsolerName] [varchar](255) NULL,
	[ConsolerID] [int] NULL,
	[CHARepresentativeName] [varchar](255) NULL,
	[CHARepresentativeNID] [int] NULL,
	[ContactNumber] [varchar](255) NULL,
	[Remarks] [varchar](255) NULL,
	[IsFinished] [bit] NOT NULL DEFAULT ((0)),
	[YearID] [int] NULL,
	[Flagdeleted] [bit] NOT NULL  DEFAULT ((0)),
	[Createdby] [bigint] NULL,
	[CreatedDate] [datetime] NOT NULL DEFAULT ([dbo].[GetCurrentDateTime]()),
	[UpdatedBy] [bigint] NULL,
	[UpdatedDate] [datetime] NULL,
	[Status] [char](1) NOT NULL DEFAULT ('P'),
	[StatusRemarks] [varchar](max) NULL,
	[HoldAgency] [varchar](255) NULL,
	[HoldAgencyID] [int] NULL,
	[Caption] [varchar](255) NULL
) ON [PRIMARY] TEXTIMAGE_ON [PRIMARY]
END 
GO