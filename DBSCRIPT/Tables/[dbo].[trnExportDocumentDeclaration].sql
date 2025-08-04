USE [CFS_BONDED_WAREHOUSE]
GO

/****** Object:  Table [dbo].[trnExportDocumentDeclaration]    Script Date: 01/08/2024 5:39:36 PM ******/
SET ANSI_NULLS ON
GO

SET QUOTED_IDENTIFIER ON
GO

CREATE TABLE [dbo].[trnExportDocumentDeclaration](
	[trnExportDocumentDeclarationID] [bigint] IDENTITY(1,1) NOT NULL,
	[DocumentRefPrefix] [varchar](255) NULL,
	[DocumentRefNo] [varchar](255) NULL,
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
	[IsFinished] [bit] NOT NULL,
	[YearID] [int] NULL,
	[Flagdeleted] [bit] NOT NULL,
	[Createdby] [bigint] NULL,
	[CreatedDate] [datetime] NOT NULL,
	[UpdatedBy] [bigint] NULL,
	[UpdatedDate] [datetime] NULL,
	[Status] [char](1) NOT NULL,
	[StatusRemarks] [varchar](max) NULL,
	[HoldAgency] [varchar](255) NULL,
	[HoldAgencyID] [int] NULL
) ON [PRIMARY] TEXTIMAGE_ON [PRIMARY]
GO

ALTER TABLE [dbo].[trnExportDocumentDeclaration] ADD  CONSTRAINT [DF_trnExportDocumentDeclaration_DocRefNo]  DEFAULT ((0)) FOR [DocumentRefNo]
GO

ALTER TABLE [dbo].[trnExportDocumentDeclaration] ADD  DEFAULT ((0)) FOR [IsFinished]
GO

ALTER TABLE [dbo].[trnExportDocumentDeclaration] ADD  DEFAULT ((0)) FOR [Flagdeleted]
GO

ALTER TABLE [dbo].[trnExportDocumentDeclaration] ADD  DEFAULT ([dbo].[GetCurrentDateTime]()) FOR [CreatedDate]
GO

ALTER TABLE [dbo].[trnExportDocumentDeclaration] ADD  DEFAULT ('P') FOR [Status]
GO


