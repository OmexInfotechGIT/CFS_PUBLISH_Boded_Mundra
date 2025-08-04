USE [CFS_BONDED_WAREHOUSE]
GO

/****** Object:  Table [dbo].[trnExportStufingWOSBDetails]    Script Date: 1/12/2024 12:21:28 PM ******/
SET ANSI_NULLS ON
GO

SET QUOTED_IDENTIFIER ON
GO
IF EXISTS (SELECT * FROM INFORMATION_SCHEMA.TABLES WHERE  TABLE_NAME='trnexportstufingwoSBDetails')
BEGIN
 DROP TABLE trnexportstufingwoSBDetails
END
GO

CREATE TABLE [dbo].[trnExportStufingWOSBDetails](
	[trnExportStufingWOSBDetailsID] [bigint] IDENTITY(1,1) NOT NULL,
	[trnExportStufingWOID] [int] NULL,
	[BOENo] [varchar](max) NOT NULL,
	[BLNo] [varchar](255) NULL,
	[trnExportDocumentDeclarationLotDetailsID] [int] NULL,
	[NOOFPKGS] [decimal](18, 2) NULL,
	[NOOFPIECES] [decimal](18, 2) NULL,
	[WEIGHT] [decimal](18, 2) NULL,
	[FOB] [varchar](max) NULL,
	[POD] [varchar](max) NULL,
	[Flagdeleted] [bit] NOT NULL,
	[Createdby] [bigint] NULL,
	[CreatedDate] [datetime] NOT NULL,
	[UpdatedBy] [bigint] NULL,
	[UpdatedDate] [datetime] NULL,
	
PRIMARY KEY CLUSTERED 
(
	[trnExportStufingWOSBDetailsID] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY] TEXTIMAGE_ON [PRIMARY]
GO

ALTER TABLE [dbo].[trnExportStufingWOSBDetails] ADD  DEFAULT ((0)) FOR [Flagdeleted]
GO

ALTER TABLE [dbo].[trnExportStufingWOSBDetails] ADD  DEFAULT ([dbo].[GetCurrentDateTime]()) FOR [CreatedDate]
GO


