USE [CFS_BONDED_WAREHOUSE]
GO

/****** Object:  Table [dbo].[trnExportStufingWO]    Script Date: 1/12/2024 12:16:33 PM ******/
SET ANSI_NULLS ON
GO

SET QUOTED_IDENTIFIER ON
GO
IF EXISTS (SELECT * FROM INFORMATION_SCHEMA.TABLES WHERE  TABLE_NAME='trnexportstufingwo')
BEGIN
 DROP TABLE trnexportstufingwo
END
GO
CREATE TABLE [dbo].[trnExportStufingWO](
	[trnExportStufingWOID] [bigint] IDENTITY(1,1) NOT NULL,
	[trnExportStufingWOPrefix] [varchar](50) NULL,
	[trnExportStufingWONo] [varchar](5) NULL,
	[AgentID] [int] NULL,
	[AgentName] [varchar](max) NULL,
	[LineID] [int] NULL,
	[LineName] [varchar](max) NULL,
	[ConsolerID] [int] NULL,
	[ConsolerName] [varchar](max) NULL,
	[VesselPortID] [int] NULL,
	[VesselPortNo] [varchar](max) NULL,
	[ContractorID] [int] NOT NULL,
	[ContractorName] [varchar](max) NOT NULL,
	[SurveyorID] [int] NOT NULL,
	[SurveyorName] [varchar](max) NOT NULL,
	[Remarks] [varchar](max) NULL,
	[Flagdeleted] [bit] NOT NULL,
	[IsFinished] [bit] NOT NULL,
	[Createdby] [bigint] NULL,
	[CreatedDate] [datetime] NOT NULL,
	[UpdatedBy] [bigint] NULL,
	[UpdatedDate] [datetime] NULL,
	[YearID] [int] NULL,
PRIMARY KEY CLUSTERED 
(
	[trnExportStufingWOID] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY] TEXTIMAGE_ON [PRIMARY]
GO

ALTER TABLE [dbo].[trnExportStufingWO] ADD  DEFAULT ((0)) FOR [Flagdeleted]
GO

ALTER TABLE [dbo].[trnExportStufingWO] ADD  DEFAULT ((0)) FOR [IsFinished]
GO

ALTER TABLE [dbo].[trnExportStufingWO] ADD  DEFAULT ([dbo].[GetCurrentDateTime]()) FOR [CreatedDate]
GO


