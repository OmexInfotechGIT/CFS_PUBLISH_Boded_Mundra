USE [CFS_BONDED_WAREHOUSE]
GO

/****** Object:  Table [dbo].[trnExBondDocumentEntryDetails]    Script Date: 01/04/2024 9:41:29 AM ******/
SET ANSI_NULLS ON
GO

SET QUOTED_IDENTIFIER ON
GO

CREATE TABLE [dbo].[trnExBondDocumentEntryDetails](
	[trnExBondDocumentEntryDetailsID] [bigint] IDENTITY(1,1) NOT NULL,
	[trnExBondDocumentEntryID] [bigint] NOT NULL,
	[ReleasedType] [varchar](255) NULL,
	[ExBondRefPrefix] [varchar](255) NULL,
	[ExBondRefNo] [varchar](255) NULL,
	[DocumentDateTime] [datetime] NOT NULL,
	[EXBOEOrSBNo] [varchar](255) NULL,
	[EXBOEOrSBDate] [datetime] NULL,
	[CHA] [varchar](255) NULL, 
	[CHAID] [bigint] NULL,
	[Forwarder] [varchar](255) NULL,
	[ForwarderID] [bigint] NULL,
	[Importer] [varchar](255) NULL,
	[ImporterID] [bigint] NULL,
	[Consoler] [varchar](255) NULL,
	[ConsolerID] [bigint] NULL,
	[SBOrInvoiceNo] [varchar](255) NULL,
	[SBOrInvoiceDate] [datetime] NULL,
	[ReleasedPackages] [decimal](18, 2) NULL,
	[ReleasedPieces] [decimal](18, 2) NULL,
	[ReleasedWeight] [decimal](18, 2) NULL,
	[ReExportReleasedArea] [decimal](18, 2) NULL,
	[AssessableValue] [varchar](255) NULL,
	[Dutyvalue] [varchar](255) NULL,
	[DutyChallanNo] [varchar](255) NULL,
	[DutyChallanDate] [datetime] NULL,
	[OOCNo] [varchar](255) NULL,
	[OOCDate] [datetime] NULL,
	[Remarks] [varchar](max) NULL,
	[EquipmentID] [bigint] NULL,
	[Equipment] [varchar](255) NULL,
	[Flagdeleted] [bit] NOT NULL,
	[Createdby] [bigint] NULL,
	[CreatedDate] [datetime] NOT NULL,
	[UpdatedBy] [bigint] NULL,
	[UpdatedDate] [datetime] NULL
) ON [PRIMARY] TEXTIMAGE_ON [PRIMARY]
GO

ALTER TABLE [dbo].[trnExBondDocumentEntryDetails] ADD  DEFAULT ((0)) FOR [Flagdeleted]
GO

ALTER TABLE [dbo].[trnExBondDocumentEntryDetails] ADD  DEFAULT ([dbo].[GetCurrentDateTime]()) FOR [CreatedDate]
GO

